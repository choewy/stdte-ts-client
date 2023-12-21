import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PagePath } from '@common';
import { userHttpService } from '@service';
import { authorizeStore, timeRecordLayoutStore, timeRecordStore } from '@store';

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

      setTimeRecord((prev) => ({ ...prev, id, editable }));
    }, [navigate, authorize, param, setTimeRecord]);
  }

  useValidateID() {
    const navigate = useNavigate();

    const { id } = timeRecordStore.useValue();
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
    }, [navigate, id, log]);

    useEffect(() => {
      existUser();
    }, [existUser]);
  }
}

export const timeRecordHook = new TimeRecordHook();
