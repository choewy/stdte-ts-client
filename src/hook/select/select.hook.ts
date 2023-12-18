import { useCallback, useEffect } from 'react';

import { HttpClientResponse } from '@core';
import { selectStore } from '@store';
import {
  SELECT_LIST,
  SELECT_LIST_ALL,
  SELECT_LIST_ALL_QUERY,
  SELECT_LIST_QUERY,
  SelectException,
  SelectList,
  SnackEvent,
  selectHttpService,
} from '@service';

import { SelectCategoryKey } from './types';

export class SelectHook {
  useGetUserListCallback() {
    const [{ users }, setSelect] = selectStore.useState();

    return useCallback(async () => {
      const res = await selectHttpService.getUserList(users.query);

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

  useScrollEndUser(scrollEnd: boolean) {
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

  useMountUser() {
    const callback = this.useGetUserListCallback();

    useEffect(() => {
      callback();
    }, [callback]);
  }

  useUnMountUser() {
    const setSelect = selectStore.useSetState();

    useEffect(() => {
      return () => {
        setSelect((prev) => ({
          ...prev,
          users: {
            list: SELECT_LIST,
            query: SELECT_LIST_QUERY,
          },
        }));
      };
    }, [setSelect]);
  }

  useGetCustomerListCallback() {
    const [{ customers }, setSelect] = selectStore.useState();

    return useCallback(async () => {
      const res = await selectHttpService.getCustomerList(customers.query);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new SelectException(res.exception));
        return false;
      }

      setSelect((prev) => ({
        ...prev,
        customers: {
          ...prev.customers,
          list: {
            total: res.data.total,
            query: res.data.query,
            rows: res.data.query.skip === 0 ? res.data.rows : [...prev.customers.list.rows, ...res.data.rows],
          },
        },
      }));
    }, [customers.query, setSelect]);
  }

  useMountCustomer() {
    const callback = this.useGetCustomerListCallback();

    useEffect(() => {
      callback();
    }, [callback]);
  }

  useUnMountCustomer() {
    const setSelect = selectStore.useSetState();

    useEffect(() => {
      return () => {
        setSelect((prev) => ({
          ...prev,
          customers: {
            list: SELECT_LIST_ALL,
            query: SELECT_LIST_ALL_QUERY,
          },
        }));
      };
    }, [setSelect]);
  }

  useGetCategoryListCallback(key: SelectCategoryKey) {
    const [{ category }, setSelect] = selectStore.useState();

    return useCallback(async () => {
      let res: HttpClientResponse<SelectList>;

      switch (key) {
        case 'businesses':
          res = await selectHttpService.getBusinessCategoryList(category[key].query);
          break;

        case 'industries':
          res = await selectHttpService.getIndustryCategoryList(category[key].query);
          break;

        case 'tasks':
          res = await selectHttpService.getTaskCategoryList(category[key].query);
          break;
      }

      if (res.ok === false) {
        SnackEvent.dispatchByException(new SelectException(res.exception));
        return false;
      }

      const data = res.data;

      setSelect((prev) => ({
        ...prev,
        category: {
          ...prev.category,
          [key]: {
            ...prev.category[key],
            list: {
              total: data.total,
              query: data.query,
              rows: data.query.skip === 0 ? data.rows : [...prev.category[key].list.rows, ...data.rows],
            },
          },
        },
      }));
    }, [key, category[key].query, setSelect]);
  }

  useMountCategory(key: SelectCategoryKey) {
    const callback = this.useGetCategoryListCallback(key);

    useEffect(() => {
      callback();
    }, [callback]);
  }

  useUnMountCategory(key: SelectCategoryKey) {
    const setSelect = selectStore.useSetState();

    useEffect(() => {
      return () => {
        setSelect((prev) => ({
          ...prev,
          category: {
            ...prev.category,
            [key]: {
              list: SELECT_LIST_ALL,
              query: SELECT_LIST_ALL_QUERY,
            },
          },
        }));
      };
    }, [key, setSelect]);
  }
}

export const selectHook = new SelectHook();
