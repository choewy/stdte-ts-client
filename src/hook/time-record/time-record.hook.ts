import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';

import { PagePath } from '@common';
import { authorizeStore, timeRecordLayoutStore, timeRecordStore } from '@store';
import {
  SnackEvent,
  TimeRecordEvent,
  TimeRecordException,
  TimeRecordOne,
  TimeRecordRow,
  TimeRecordUpsertBody,
  timeRecordHttpService,
  timeRecordSocketService,
  userHttpService,
} from '@service';

export class TimeRecordHook {
  useParamID() {
    const navigate = useNavigate();
    const param = useParams<{ id: string }>();

    const authorize = authorizeStore.useValue();
    const setTimeRecord = timeRecordStore.useSetState();

    useEffect(() => {
      if (authorize == null) {
        return;
      }

      if (authorize === false) {
        return navigate(PagePath.SignIn, { replace: true });
      }

      if (param.id == null) {
        return navigate([PagePath.TimeRecord, authorize.id].join('/'), { replace: true });
      }

      const id = Number(param.id);
      const editable = authorize.id === id;

      if (Number.isNaN(id)) {
        return navigate([PagePath.TimeRecord, authorize.id].join('/'), { replace: true });
      }

      setTimeRecord((prev) => ({ ...prev, id, editable, load: false }));
    }, [navigate, authorize, param, setTimeRecord]);
  }

  useValidateID() {
    const navigate = useNavigate();

    const [{ id }, setTimeRecord] = timeRecordStore.useState();
    const { log } = timeRecordLayoutStore.useValue();

    const existUser = useCallback(async () => {
      if (id === 0 || log.rows.length === 0) {
        return;
      }

      if (log.rows.map(({ id }) => id).includes(id) === false) {
        return navigate([PagePath.TimeRecord, log.rows[0].id].join('/'), { replace: true });
      }

      const res = await userHttpService.existRow(id);

      if (res.ok === false) {
        return navigate([PagePath.TimeRecord, log.rows[0].id].join('/'), { replace: true });
      }

      setTimeRecord((prev) => ({ ...prev, load: true }));
    }, [navigate, id, log, setTimeRecord]);

    useEffect(() => {
      existUser();
    }, [existUser]);
  }

  useGetTimeListCallback() {
    const { date } = timeRecordLayoutStore.useValue();
    const [{ id, load }, setTimeRecord] = timeRecordStore.useState();

    return useCallback(async () => {
      if (id === 0) {
        return;
      }

      if (date.s === '' || date.e === '') {
        return;
      }

      if (load === false) {
        return;
      }

      const res = await timeRecordHttpService.getTimeList({
        user: id,
        s: date.s,
        e: date.e,
      });

      if (res.ok === false) {
        return;
      }

      setTimeRecord((prev) => ({
        ...prev,
        sums: res.data.sums,
        rows: res.data.rows,
      }));
    }, [date.s, date.e, id, load, setTimeRecord]);
  }

  useEventListeners() {
    const authorize = authorizeStore.useValue();
    const { id } = timeRecordStore.useValue();

    const setTimeRecord = timeRecordStore.useSetState();

    const handler = useCallback(
      (e: Event) => {
        const event = e as CustomEvent<TimeRecordOne>;
        const detail = event.detail;

        if (detail.row == null || detail.sum == null) {
          return;
        }

        setTimeRecord((prev) => {
          const ids = prev.rows.map(({ id }) => id);

          if (ids.includes(detail.row.id)) {
            return {
              ...prev,
              rows: prev.rows.map((row) => (row.id === detail.row.id ? detail.row : row)),
              sums: prev.sums.map((sum) => (sum.date === detail.sum.date ? detail.sum : sum)),
            };
          } else {
            return {
              ...prev,
              rows: [...prev.rows, detail.row],
              sums: prev.sums.map((sum) => (sum.date === detail.sum.date ? detail.sum : sum)),
            };
          }
        });
      },
      [setTimeRecord],
    );

    useEffect(() => {
      if (authorize == null || authorize === false || id === 0) {
        return;
      }

      window.addEventListener(TimeRecordEvent.UPSERT, handler);

      return () => {
        window.removeEventListener(TimeRecordEvent.UPSERT, handler);
      };
    }, [authorize, id, handler]);
  }

  useConnectSocket() {
    const authorize = authorizeStore.useValue();
    const { id } = timeRecordStore.useValue();

    useEffect(() => {
      if (authorize == null || authorize === false || id === 0) {
        return;
      }

      timeRecordSocketService.connection(id);

      return () => {
        timeRecordSocketService.disconnect();
      };
    }, [authorize, id]);
  }

  useMount() {
    const getTimeRecordList = this.useGetTimeListCallback();

    useEffect(() => {
      getTimeRecordList();
    }, [getTimeRecordList]);
  }

  useUnMount() {
    const resetTimeRecord = timeRecordStore.useResetState();

    useEffect(() => {
      return () => {
        resetTimeRecord();
      };
    }, [resetTimeRecord]);
  }

  useUpsertState(id: number, row: TimeRecordRow): [TimeRecordUpsertBody, SetterOrUpdater<TimeRecordUpsertBody>] {
    const [body, setBody] = useState<TimeRecordUpsertBody>({
      user: 0,
      date: '',
      time: '',
      project: 0,
      taskMainCategory: 0,
      taskSubCategory: 0,
    });

    useEffect(() => {
      setBody({
        user: id,
        date: row.date,
        time: row.time,
        project: row.project,
        taskMainCategory: row.category.parent,
        taskSubCategory: row.category.child,
      });
    }, [id, row, setBody]);

    return [body, setBody];
  }

  useUpsertCallback(body: TimeRecordUpsertBody) {
    return useCallback(async () => {
      const res = await timeRecordHttpService.upsertTime(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new TimeRecordException(res.exception));

        return false;
      }

      SnackEvent.dispatchBySuccess('저장되었습니다.');
      return true;
    }, [body]);
  }
}

export const timeRecordHook = new TimeRecordHook();
