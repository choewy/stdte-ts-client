import { useCallback, useEffect } from 'react';

import { timeRecordLayoutStore } from '@store';
import { datetimeService, timeRecordHttpService } from '@service';

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
