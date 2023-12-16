import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { RolePolicyLevel } from '@common';
import { adminRoleStore, selectStore } from '@store';
import {
  RoleAdminCreateBody,
  RoleAdminRowResponse,
  RoleAdminUpdateBody,
  RoleAdminUsersBody,
  RoleException,
  SnackEvent,
  roleHttpService,
} from '@service';

export class RoleHook {
  useGetRoleListCallback() {
    const [{ load, query }, setAdminRole] = adminRoleStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await roleHttpService.getListByAdmin(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new RoleException(res.exception));
      }

      setAdminRole((prev) => ({
        ...prev,
        load: false,
        list:
          res.data.query.skip === 0
            ? res.data
            : {
                ...prev.list,
                rows: [...prev.list.rows, ...res.data.rows],
                query: res.data.query,
              },
      }));
    }, [load, query, setAdminRole]);
  }

  useMountRolePage() {
    const getRoleList = this.useGetRoleListCallback();

    useEffect(() => {
      getRoleList();
    }, [getRoleList]);
  }

  useUnmountRolePage() {
    const resetAdminRole = adminRoleStore.useResetState();
    const resetSelect = selectStore.useResetState();

    useEffect(() => {
      return () => {
        resetAdminRole();
        resetSelect();
      };
    }, [resetAdminRole, resetSelect]);
  }

  useRoleScrollEnd(scrollEnd: boolean) {
    const setAdminRole = adminRoleStore.useSetState();

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setAdminRole((prev) => {
        const skip = prev.query.skip + prev.query.take;

        if (prev.list.total > skip) {
          return { ...prev, load: true, query: { ...prev.query, skip } };
        }

        return prev;
      });
    }, [scrollEnd, setAdminRole]);
  }

  useRoleCreateState() {
    return useState<RoleAdminCreateBody>({
      name: '',
      rolePolicy: {
        roleAndPolicy: RolePolicyLevel.Limit,
        credentials: RolePolicyLevel.Limit,
        user: RolePolicyLevel.Limit,
        project: RolePolicyLevel.Limit,
        customer: RolePolicyLevel.Limit,
        businessCategory: RolePolicyLevel.Limit,
        industryCategory: RolePolicyLevel.Limit,
        taskCategory: RolePolicyLevel.Limit,
        setting: RolePolicyLevel.Limit,
      },
    });
  }

  useRoleCreateCallback(body: RoleAdminCreateBody) {
    const setAdminRole = adminRoleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.createRole(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 생성되었습니다.');

      setAdminRole((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          total: prev.list.total + 1,
          rows: [res.data, ...prev.list.rows],
        },
      }));

      return true;
    }, [body, setAdminRole]);
  }

  useRoleUpdateState(role: RoleAdminRowResponse): [RoleAdminUpdateBody, SetterOrUpdater<RoleAdminUpdateBody>] {
    const [body, setBody] = useState<RoleAdminUpdateBody>({
      name: '',
      rolePolicy: {
        roleAndPolicy: RolePolicyLevel.Limit,
        credentials: RolePolicyLevel.Limit,
        user: RolePolicyLevel.Limit,
        project: RolePolicyLevel.Limit,
        customer: RolePolicyLevel.Limit,
        businessCategory: RolePolicyLevel.Limit,
        industryCategory: RolePolicyLevel.Limit,
        taskCategory: RolePolicyLevel.Limit,
        setting: RolePolicyLevel.Limit,
      },
    });

    useEffect(() => {
      setBody({
        name: role.name,
        rolePolicy: role.rolePolicy,
      });
    }, [role, setBody]);

    return [body, setBody];
  }

  useRoleUpdateCallback(id: number, body: RoleAdminUpdateBody) {
    const setAdminRole = adminRoleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.updateRole(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 저장되었습니다.');

      setAdminRole((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          rows: prev.list.rows.map((row) => (row.id === id ? res.data : row)),
        },
      }));

      return true;
    }, [id, body, setAdminRole]);
  }

  useRoleUsersState(role: RoleAdminRowResponse): [RoleAdminUsersBody, SetterOrUpdater<RoleAdminUsersBody>] {
    const [body, setBody] = useState<RoleAdminUsersBody>([]);

    useEffect(() => {
      setBody(role.users);
    }, [role, setBody]);

    return [body, setBody];
  }

  useRoleUsersUpdateCallback(id: number, body: RoleAdminUsersBody) {
    const setAdminRole = adminRoleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.updateRoleUsers(id, {
        users: body.map(({ id }) => id),
      });

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 저장되었습니다.');

      setAdminRole((prev) => {
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
    }, [id, body, setAdminRole]);
  }

  useDeleteRoleCallback(id: number) {
    const setAdminRole = adminRoleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.deleteRole(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 삭제되었습니다.');

      setAdminRole((prev) => {
        const total = prev.list.total - 1;
        const rows = prev.list.rows.filter((row) => row.id !== id);
        const load = rows.length < prev.query.take;

        return { ...prev, load, list: { ...prev.list, total, rows } };
      });

      return true;
    }, [id, setAdminRole]);
  }
}

export const roleHook = new RoleHook();
