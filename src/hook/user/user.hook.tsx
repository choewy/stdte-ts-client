import { SnackEvent, UserException, userHttpService } from '@service';
import { userStore } from '@store';

import { useCallback, useEffect } from 'react';

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
}

export const userHook = new UserHook();
