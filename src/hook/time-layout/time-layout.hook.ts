import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PagePath } from '@common';
import { authorizeStore, timeLayoutStore } from '@store';
import {
  TimeLogEvent,
  TimeLogRow,
  datetimeService,
  timeLogHttpService,
  timeLogSocketService,
  timeProjectHttpService,
  userHttpService,
} from '@service';

export class TimeLayoutHook {
  useSetTimeDateListCallback() {
    const [{ date }, setTimeLayout] = timeLayoutStore.useState();

    return useCallback(() => {
      const rows = datetimeService.getDateTimeRowsByRange(date.s, date.e);

      setTimeLayout((prev) => ({ ...prev, date: { ...prev.date, rows } }));
    }, [date.s, date.e, setTimeLayout]);
  }

  useGetTimeLogListCallback() {
    const setTimeLayout = timeLayoutStore.useSetState();

    return useCallback(async () => {
      const res = await timeLogHttpService.getList();

      if (res.ok === true) {
        setTimeLayout((prev) => ({ ...prev, log: { rows: res.data.rows } }));
      }
    }, [setTimeLayout]);
  }

  useGetTimeProjectListCallback() {
    const setTimeLayout = timeLayoutStore.useSetState();

    return useCallback(async () => {
      const res = await timeProjectHttpService.getList();

      if (res.ok === true) {
        setTimeLayout((prev) => ({ ...prev, project: { rows: res.data.rows } }));
      }
    }, [setTimeLayout]);
  }

  useValidateUserCallback() {
    const navigate = useNavigate();

    const [{ id, log }, setTimeLayout] = timeLayoutStore.useState();

    return useCallback(async () => {
      if (id === 0 || log.rows.length === 0) {
        return;
      }

      if (log.rows.findIndex((log) => log.id === id) < 0) {
        return navigate([PagePath.TimeRecord, log.rows[0].id].join('/'), { replace: true });
      }

      const res = await userHttpService.existRow(id);

      if (res.ok === false) {
        return navigate([PagePath.TimeRecord, log.rows[0].id].join('/'), { replace: true });
      }

      setTimeLayout((prev) => ({ ...prev, loadable: true }));
    }, [navigate, id, log, setTimeLayout]);
  }

  useEventListeners() {
    const authorize = authorizeStore.useValue();

    const setTimeLayout = timeLayoutStore.useSetState();

    const onUpdate = useCallback(
      (e: Event) => {
        const event = e as CustomEvent<TimeLogRow>;
        const detail = event.detail;

        setTimeLayout((prev) => ({
          ...prev,
          log: {
            ...prev.log,
            rows: prev.log.rows.map((row) => (row.id === detail.id ? detail : row)),
          },
        }));
      },
      [setTimeLayout],
    );

    useEffect(() => {
      if (authorize == null || authorize === false) {
        return;
      }

      window.addEventListener(TimeLogEvent.UPDATE, onUpdate);

      return () => {
        window.removeEventListener(TimeLogEvent.UPDATE, onUpdate);
      };
    }, [authorize, onUpdate]);
  }

  useConnectSocket() {
    const authorize = authorizeStore.useValue();

    useEffect(() => {
      if (authorize == null || authorize === false) {
        return;
      }

      timeLogSocketService.connection();

      return () => {
        timeLogSocketService.disconnect();
      };
    }, [authorize]);
  }

  useMount() {
    const setTimeDateList = this.useSetTimeDateListCallback();
    const getTimeLogList = this.useGetTimeLogListCallback();
    const getTimeProjectList = this.useGetTimeProjectListCallback();

    useEffect(() => {
      setTimeDateList();
    }, [setTimeDateList]);

    useEffect(() => {
      getTimeLogList();
    }, [getTimeLogList]);

    useEffect(() => {
      getTimeProjectList();
    }, [getTimeProjectList]);
  }

  useUnMount() {
    const resetTimeLayout = timeLayoutStore.useResetState();

    useEffect(() => {
      return () => resetTimeLayout();
    }, [resetTimeLayout]);
  }

  useBindParams() {
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();

    const authorize = authorizeStore.useValue();
    const setTimeLayout = timeLayoutStore.useSetState();

    useEffect(() => {
      if (authorize == null || authorize === false) {
        return;
      }

      const id = Number(params.id);

      if (id === 0 || Number.isNaN(id)) {
        return navigate([PagePath.TimeRecord, authorize.id].join('/'), { replace: true });
      }

      setTimeLayout((prev) => ({ ...prev, id, loadable: false, editable: id === authorize.id }));
    }, [navigate, params, authorize, setTimeLayout]);
  }

  useValidateUser() {
    const validateUser = this.useValidateUserCallback();

    useEffect(() => {
      validateUser();
    }, [validateUser]);
  }
}

export const timeLayoutHook = new TimeLayoutHook();
