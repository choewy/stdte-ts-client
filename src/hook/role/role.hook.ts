import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { roleStore, selectStore } from '@store';
import {
  RoleCreateBody,
  RoleRow,
  RoleUpdateBody,
  RoleUpdateUsersBody,
  RoleException,
  SnackEvent,
  roleHttpService,
  ROLE_ROW_POLICY,
} from '@service';

export class RoleHook {
  useGetRoleListCallback() {
    const [{ load, query }, setRole] = roleStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await roleHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new RoleException(res.exception));
      }

      setRole((prev) => ({
        ...prev,
        load: false,
        list:
          res.data.query.skip === 0
            ? res.data
            : {
                ...prev.list,
                rows: [...prev.list.rows, ...res.data.rows].sort((x, y) => x.id - y.id),
                query: res.data.query,
              },
      }));
    }, [load, query, setRole]);
  }

  useMount() {
    const getRoleList = this.useGetRoleListCallback();

    useEffect(() => {
      getRoleList();
    }, [getRoleList]);
  }

  useUnmount() {
    const resetRole = roleStore.useResetState();
    const resetSelect = selectStore.useResetState();

    useEffect(() => {
      return () => {
        resetRole();
        resetSelect();
      };
    }, [resetRole, resetSelect]);
  }

  useScrollEnd(scrollEnd: boolean) {
    const setRole = roleStore.useSetState();

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setRole((prev) => {
        const skip = prev.query.skip + prev.query.take;

        if (prev.list.total > skip) {
          return { ...prev, load: true, query: { ...prev.query, skip } };
        }

        return prev;
      });
    }, [scrollEnd, setRole]);
  }

  useCreateState() {
    return useState<RoleCreateBody>({
      name: '',
      rolePolicy: ROLE_ROW_POLICY,
    });
  }

  useCreateCallback(body: RoleCreateBody) {
    const setRole = roleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.createRow(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 생성되었습니다.');

      setRole((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          total: prev.list.total + 1,
          rows: [...prev.list.rows, res.data],
        },
      }));

      return true;
    }, [body, setRole]);
  }

  useUpdateState(role: RoleRow): [RoleUpdateBody, SetterOrUpdater<RoleUpdateBody>] {
    const [body, setBody] = useState<RoleUpdateBody>({
      name: '',
      rolePolicy: ROLE_ROW_POLICY,
    });

    useEffect(() => {
      setBody({
        name: role.name,
        rolePolicy: role.rolePolicy,
      });
    }, [role, setBody]);

    return [body, setBody];
  }

  useUpdateCallback(id: number, body: RoleUpdateBody) {
    const setRole = roleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.updateRow(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 저장되었습니다.');

      setRole((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          rows: prev.list.rows.map((row) => (row.id === id ? res.data : row)),
        },
      }));

      return true;
    }, [id, body, setRole]);
  }

  useUpdateUsersState(role: RoleRow): [RoleUpdateUsersBody, SetterOrUpdater<RoleUpdateUsersBody>] {
    const [body, setBody] = useState<RoleUpdateUsersBody>([]);

    useEffect(() => {
      setBody(role.users);
    }, [role, setBody]);

    return [body, setBody];
  }

  useUpdateUsersCallback(id: number, body: RoleUpdateUsersBody) {
    const setRole = roleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.updateRowUsers(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 저장되었습니다.');

      setRole((prev) => {
        if (res.data.length === 0) {
          return prev;
        }

        const rows = [...prev.list.rows];

        for (const role of res.data) {
          const rowIndex = prev.list.rows.findIndex((row) => row.id === role.id);

          if (rowIndex < 0) {
            continue;
          }

          rows[rowIndex] = { ...rows[rowIndex], users: role.users };
        }

        return { ...prev, list: { ...prev.list, rows } };
      });

      return true;
    }, [id, body, setRole]);
  }

  useDeleteCallback(id: number) {
    const setRole = roleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.deleteRow(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 삭제되었습니다.');

      setRole((prev) => {
        const total = prev.list.total - 1;
        const rows = prev.list.rows.filter((row) => row.id !== id);
        const load = rows.length < prev.query.take;

        return { ...prev, load, list: { ...prev.list, total, rows } };
      });

      return true;
    }, [id, setRole]);
  }
}

export const roleHook = new RoleHook();
