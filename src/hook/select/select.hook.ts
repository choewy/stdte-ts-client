import { useCallback, useEffect } from 'react';

import { SelectException, SnackEvent, selectHttpService } from '@service';
import { SELECT_STORE_DEFALUT_LIST, SELECT_STORE_DEFALUT_QUERY, selectStore } from '@store';

export class SelectHook {
  useGetSelectUserListCallback() {
    const [{ users }, setSelect] = selectStore.useState();
    return useCallback(async () => {
      const res = await selectHttpService.getUsers(users.query);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new SelectException(res.exception));
        return false;
      }

      setSelect((prev) => ({
        ...prev,
        users: {
          ...prev.users,
          list: {
            total: res.data.total,
            query: res.data.query,
            rows: res.data.query.skip === 0 ? res.data.rows : [...prev.users.list.rows, ...res.data.rows],
          },
        },
      }));
    }, [users.query, setSelect]);
  }

  useSelectUsersScrollEnd(scrollEnd: boolean) {
    const setSelect = selectStore.useSetState();

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setSelect((prev) => {
        const skip = prev.users.query.skip + prev.users.query.take;

        if (prev.users.list.total > skip) {
          return {
            ...prev,
            users: { ...prev.users, query: { ...prev.users.query, skip } },
          };
        }

        return prev;
      });
    }, [scrollEnd, setSelect]);
  }

  useSelectUserMount() {
    const getUserList = this.useGetSelectUserListCallback();

    useEffect(() => {
      getUserList();
    }, [getUserList]);
  }

  useSelectUserUnMount() {
    const setSelect = selectStore.useSetState();

    useEffect(() => {
      return () => {
        setSelect((prev) => ({
          ...prev,
          users: {
            list: SELECT_STORE_DEFALUT_LIST,
            query: SELECT_STORE_DEFALUT_QUERY,
          },
        }));
      };
    }, [setSelect]);
  }
}

export const selectHook = new SelectHook();
