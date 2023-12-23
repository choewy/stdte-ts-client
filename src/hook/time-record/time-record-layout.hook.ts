import { useCallback, useEffect } from 'react';

import { authorizeStore, timeRecordLayoutStore } from '@store';
import {
  TimeRecordLogEvent,
  TimeRecordLogRow,
  datetimeService,
  timeRecordHttpService,
  timeRecordLogSocketService,
} from '@service';

export class TimeRecordLayoutHook {
  useGetTimeRecordLogListCallback() {
    const setTimeRecordLayout = timeRecordLayoutStore.useSetState();

    return useCallback(async () => {
      const res = await timeRecordHttpService.getLogList();

      if (res.ok === true) {
        setTimeRecordLayout((prev) => ({ ...prev, log: res.data }));
      }
    }, [setTimeRecordLayout]);
  }

  useGetTimeRecordProjectListCallback() {
    const setTimeRecordLayout = timeRecordLayoutStore.useSetState();

    return useCallback(async () => {
      const res = await timeRecordHttpService.getProjectList();

      if (res.ok === true) {
        setTimeRecordLayout((prev) => ({ ...prev, project: res.data }));
      }
    }, [setTimeRecordLayout]);
  }

  useSetTimeRecordDateListCallback() {
    const [{ date }, setTimeRecordLayout] = timeRecordLayoutStore.useState();

    return useCallback(() => {
      setTimeRecordLayout((prev) => ({
        ...prev,
        date: {
          ...prev.date,
          rows: datetimeService.getDateTimeRowsByRange(date.s, date.e),
        },
      }));
    }, [date.s, date.e, setTimeRecordLayout]);
  }

  useEventListeners() {
    const authorize = authorizeStore.useValue();

    const setTimeRecordLayout = timeRecordLayoutStore.useSetState();

    const handler = useCallback(
      (e: Event) => {
        const event = e as CustomEvent<TimeRecordLogRow>;
        const detail = event.detail;

        setTimeRecordLayout((prev) => ({
          ...prev,
          log: { ...prev.log, rows: prev.log.rows.map((row) => (row.id === detail.id ? detail : row)) },
        }));
      },
      [setTimeRecordLayout],
    );

    useEffect(() => {
      if (authorize == null || authorize === false) {
        return;
      }

      window.addEventListener(TimeRecordLogEvent.UPDATE, handler);

      return () => {
        window.removeEventListener(TimeRecordLogEvent.UPDATE, handler);
      };
    }, [authorize, handler]);
  }

  useSocketConnect() {
    const authorize = authorizeStore.useValue();

    useEffect(() => {
      if (authorize == null || authorize === false) {
        return;
      }

      timeRecordLogSocketService.connection();

      return () => {
        timeRecordLogSocketService.disconnect();
      };
    }, [authorize]);
  }

  useMount() {
    const setTimeRecordDateList = this.useSetTimeRecordDateListCallback();
    const getTimeRecordLogList = this.useGetTimeRecordLogListCallback();
    const getTimeRecordProjectList = this.useGetTimeRecordProjectListCallback();

    useEffect(() => {
      setTimeRecordDateList();
    }, [setTimeRecordDateList]);

    useEffect(() => {
      getTimeRecordLogList();
    }, [getTimeRecordLogList]);

    useEffect(() => {
      getTimeRecordProjectList();
    }, [getTimeRecordProjectList]);
  }

  useUnMount() {
    const resetTimeRecordLayout = timeRecordLayoutStore.useResetState();

    useEffect(() => {
      return () => {
        resetTimeRecordLayout();
      };
    }, [resetTimeRecordLayout]);
  }
}

export const timeRecordLayoutHook = new TimeRecordLayoutHook();
