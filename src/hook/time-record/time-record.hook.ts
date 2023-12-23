import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PagePath } from '@common';
import {
  DateTimeRowProperty,
  SnackEvent,
  TimeRecordException,
  TimeRecordRow,
  TimeRecordUpsertBody,
  timeRecordHttpService,
  userHttpService,
} from '@service';
import { authorizeStore, timeRecordLayoutStore, timeRecordStore } from '@store';
import { SetterOrUpdater } from 'recoil';

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
