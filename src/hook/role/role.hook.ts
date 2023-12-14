import { useCallback, useEffect } from 'react';

import { adminRoleStore } from '@store';
import { RoleException, SnackEvent, roleHttpService } from '@service';

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
}

export const roleHook = new RoleHook();
