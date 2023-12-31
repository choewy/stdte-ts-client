import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { authorizeStore, timeLayoutStore, timeRecordStore } from '@store';
import {
  SnackEvent,
  TimeRecordEvent,
  TimeRecordException,
  TimeRecordOne,
  TimeRecordRow,
  TimeRecordUpsertBody,
  timeRecordHttpService,
  timeRecordSocketService,
} from '@service';

export class TimeRecordHook {
  useGetListCallback() {
    const { id, loadable, date } = timeLayoutStore.useValue();

    const setTimeRecord = timeRecordStore.useSetState();

    return useCallback(async () => {
      if (id === 0 || date.s === '' || date.e === '' || loadable === false) {
        return;
      }

      const res = await timeRecordHttpService.getList({
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
    }, [date.s, date.e, id, loadable, setTimeRecord]);
  }

  useEventListeners() {
    const authorize = authorizeStore.useValue();

    const { id } = timeLayoutStore.useValue();

    const setTimeRecord = timeRecordStore.useSetState();

    const onUpsert = useCallback(
      (e: Event) => {
        const event = e as CustomEvent<TimeRecordOne>;
        const detail = event.detail;

        if (detail.row == null || detail.sum == null) {
          return;
        }

        setTimeRecord((prev) => {
          if (prev.rows.findIndex((row) => row.id === detail.row.id)) {
            return {
              ...prev,
              rows: [...prev.rows, detail.row],
              sums: prev.sums.map((sum) => (sum.date === detail.sum.date ? detail.sum : sum)),
            };
          } else {
            return {
              ...prev,
              rows: prev.rows.map((row) => (row.id === detail.row.id ? detail.row : row)),
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

      window.addEventListener(TimeRecordEvent.UPSERT, onUpsert);

      return () => {
        window.removeEventListener(TimeRecordEvent.UPSERT, onUpsert);
      };
    }, [authorize, id, onUpsert]);
  }

  useSocketConnect() {
    const authorize = authorizeStore.useValue();
    const { id } = timeLayoutStore.useValue();

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
    const getList = this.useGetListCallback();

    useEffect(() => {
      getList();
    }, [getList]);
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
      id: null,
      user: 0,
      date: '',
      time: '',
      project: 0,
      taskMainCategory: 0,
      taskSubCategory: 0,
    });

    useEffect(() => {
      setBody({
        id: row.id ?? null,
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
      const res = await timeRecordHttpService.upsertRow(body);

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
