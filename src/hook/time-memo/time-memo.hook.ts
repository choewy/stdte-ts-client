import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { authorizeStore, timeLayoutStore, timeMemoStore } from '@store';
import {
  SnackEvent,
  TimeMemoEvent,
  TimeMemoRow,
  TimeMemoUpsertBody,
  timeMemoHttpService,
  timeMemoSocketService,
} from '@service';

export class TimeMemoHook {
  useGetListCallback() {
    const { id, loadable, date } = timeLayoutStore.useValue();

    const setTimeMemo = timeMemoStore.useSetState();

    return useCallback(async () => {
      if (id === 0 || date.s === '' || date.e === '' || loadable === false) {
        return;
      }

      const res = await timeMemoHttpService.getList({
        user: id,
        s: date.s,
        e: date.e,
      });

      if (res.ok === false) {
        return;
      }

      setTimeMemo((prev) => ({ ...prev, rows: res.data.rows }));
    }, [id, loadable, date.s, date.e, setTimeMemo]);
  }

  useEventListeners() {
    const authorize = authorizeStore.useValue();

    const { id } = timeLayoutStore.useValue();

    const setTimeMemo = timeMemoStore.useSetState();

    const onUpsert = useCallback(
      (e: Event) => {
        const event = e as CustomEvent<TimeMemoRow>;
        const detail = event.detail;

        setTimeMemo((prev) => {
          if (prev.rows.findIndex((row) => row.id === detail.id) < 0) {
            return { ...prev, rows: [...prev.rows, detail] };
          } else {
            return { ...prev, rows: prev.rows.map((row) => (row.id === detail.id ? detail : row)) };
          }
        });
      },
      [setTimeMemo],
    );

    const onDelete = useCallback(
      (e: Event) => {
        const event = e as CustomEvent<Pick<TimeMemoRow, 'id'>>;
        const detail = event.detail;

        setTimeMemo((prev) => ({ ...prev, rows: prev.rows.filter((row) => row.id !== detail.id) }));
      },
      [setTimeMemo],
    );

    useEffect(() => {
      if (authorize == null || authorize === false || id === 0) {
        return;
      }

      window.addEventListener(TimeMemoEvent.UPSERT, onUpsert);
      window.addEventListener(TimeMemoEvent.DELETE, onDelete);

      return () => {
        window.removeEventListener(TimeMemoEvent.UPSERT, onUpsert);
        window.removeEventListener(TimeMemoEvent.DELETE, onDelete);
      };
    }, [authorize, id, onUpsert, onDelete]);
  }

  useSocketConnect() {
    const authorize = authorizeStore.useValue();
    const { id } = timeLayoutStore.useValue();

    useEffect(() => {
      if (authorize == null || authorize === false || id === 0) {
        return;
      }

      timeMemoSocketService.connection(id);

      return () => {
        timeMemoSocketService.disconnect();
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
    const resetTimeMemo = timeMemoStore.useResetState();

    useEffect(() => {
      return () => {
        resetTimeMemo();
      };
    }, [resetTimeMemo]);
  }

  useDialogCallback(...args: ['delete', boolean, TimeMemoRow] | ['upsert', boolean, TimeMemoRow]) {
    const setTimeMemo = timeMemoStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      setTimeMemo((prev) => ({ ...prev, dialog: { ...prev.dialog, [key]: { open, row } } }));
    }, [args, setTimeMemo]);
  }

  useUpsertState(user: number, row: TimeMemoRow): [TimeMemoUpsertBody, SetterOrUpdater<TimeMemoUpsertBody>] {
    const [body, setBody] = useState<TimeMemoUpsertBody>({
      id: null,
      user: 0,
      date: '',
      text: '',
    });

    useEffect(() => {
      setBody({
        id: row.id,
        date: row.date,
        text: row.text,
        user,
      });
    }, [user, row]);

    return [body, setBody];
  }

  useUpsertCallback(body: TimeMemoUpsertBody) {
    return useCallback(async () => {
      const res = await timeMemoHttpService.upsertRow(body);

      if (res.ok === false) {
        return false;
      }

      SnackEvent.dispatchBySuccess('저장되었습니다.');

      return res.ok;
    }, [body]);
  }

  useDeleteCallback(id: number) {
    return useCallback(async () => {
      const res = await timeMemoHttpService.deleteRow(id);

      if (res.ok === false) {
        return false;
      }

      SnackEvent.dispatchBySuccess('삭제되었습니다.');
      return true;
    }, [id]);
  }
}

export const timeMemoHook = new TimeMemoHook();
