import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { UserStatus } from '@common';
import { userStore } from '@store';
import { SnackEvent, UserException, UserRowResponse, UserRowUpdateBody, userHttpService } from '@service';

export class UserHook {
  useGetListCallback() {
    const [{ query }, setState] = userStore.useState();

    return useCallback(async () => {
      const res = await userHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new UserException(res.exception));
      }

      setState((prev) => ({
        ...prev,
        list:
          res.data.query.skip === 0
            ? res.data
            : {
                ...prev.list,
                rows: [...prev.list.rows, ...res.data.rows],
                query: res.data.query,
              },
      }));
    }, [query, setState]);
  }

  useMount() {
    const getList = this.useGetListCallback();

    useEffect(() => {
      getList();
    }, [getList]);
  }

  useUnMount() {
    const resetState = userStore.useResetState();

    useEffect(() => {
      return () => {
        resetState();
      };
    }, [resetState]);
  }

  useScrollEnd(scrollEnd: boolean) {
    const setState = userStore.useSetState();

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setState((prev) => {
        const skip = prev.query.skip + prev.query.take;

        if (prev.list.total > skip) {
          return { ...prev, query: { ...prev.query, skip } };
        }

        return prev;
      });
    }, [scrollEnd, setState]);
  }

  useUpdateState(row: UserRowResponse): [UserRowUpdateBody, SetterOrUpdater<UserRowUpdateBody>] {
    const [body, setBody] = useState<UserRowUpdateBody>({
      name: '',
      phone: '',
      birthday: '',
      scienceNumber: '',
      degree: '',
      school: '',
      major: '',
      carType: '',
      carNumber: '',
      enteringDay: '',
      resignationDay: '',
      role: null,
      status: UserStatus.Wating,
    });

    useEffect(() => {
      setBody({
        name: row.name,
        phone: row.phone,
        birthday: row.birthday,
        scienceNumber: row.scienceNumber,
        degree: row.degree,
        school: row.school,
        major: row.major,
        carType: row.carType,
        carNumber: row.carNumber,
        enteringDay: row.enteringDay,
        resignationDay: row.resignationDay,
        role: row.role?.id ?? null,
        status: row.status,
      });
    }, [row, setBody]);

    return [body, setBody];
  }

  useUpdateCallback(id: number, body: UserRowUpdateBody) {
    const setUser = userStore.useSetState();

    return useCallback(async () => {
      const res = await userHttpService.update(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new UserException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('구성원 정보가 저장되었습니다.');
      setUser((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          rows: prev.list.rows.map((row) => (row.id === res.data.id ? res.data : row)),
        },
      }));

      return true;
    }, [id, body, setUser]);
  }
}

export const userHook = new UserHook();
