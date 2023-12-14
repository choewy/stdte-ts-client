import { useCallback, useEffect, useState } from 'react';

import { adminRoleStore } from '@store';
import {
  RoleAdminCreateBody,
  RoleAdminRowResponse,
  RoleAdminUpdateBody,
  RoleException,
  SnackEvent,
  roleHttpService,
} from '@service';
import { RolePolicyLevel } from '@common';
import { SetterOrUpdater } from 'recoil';

export class RoleHook {
  useGetRoleListCallback() {
    const [{ query }, setAdminRole] = adminRoleStore.useState();

    return useCallback(async () => {
      const res = await roleHttpService.getListByAdmin(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new RoleException(res.exception));
      }

      setAdminRole((prev) => ({
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
    }, [query, setAdminRole]);
  }

  useMountRolePage() {
    const getRoleList = this.useGetRoleListCallback();

    useEffect(() => {
      getRoleList();
    }, [getRoleList]);
  }

  useUnmountRolePage() {
    const resetAdminRole = adminRoleStore.useResetState();

    useEffect(() => {
      return () => {
        resetAdminRole();
      };
    }, [resetAdminRole]);
  }

  useRoleScrollEnd(scrollEnd: boolean) {
    const setAdminRole = adminRoleStore.useSetState();

    const setQuerySkip = useCallback(() => {
      setAdminRole((prev) => {
        const skip = prev.query.skip + prev.query.take;

        if (prev.list.total > skip) {
          return { ...prev, query: { ...prev.query, skip } };
        }

        return prev;
      });
    }, [setAdminRole]);

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setQuerySkip();
    }, [scrollEnd, setQuerySkip]);
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
      const createResponse = await roleHttpService.createRole(body);

      if (createResponse.ok === false) {
        SnackEvent.dispatchByException(new RoleException(createResponse.exception));
        return false;
      }

      const getResponse = await roleHttpService.getRole(createResponse.data.id);

      if (getResponse.ok === false) {
        SnackEvent.dispatchByException(new RoleException(getResponse.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 생성되었습니다.');

      setAdminRole((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          total: prev.list.total + 1,
          rows: [getResponse.data, ...prev.list.rows],
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

  useDeleteRoleCallback(id: number) {
    const setAdminRole = adminRoleStore.useSetState();

    return useCallback(async () => {
      const res = await roleHttpService.deleteRole(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new RoleException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('역할이 삭제되었습니다.');

      setAdminRole((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          total: prev.list.total - 1,
          rows: prev.list.rows.filter((row) => row.id !== id),
        },
      }));

      return true;
    }, [id, setAdminRole]);
  }
}

export const roleHook = new RoleHook();
