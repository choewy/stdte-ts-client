import { useCallback, useEffect, useState } from 'react';

import {
  CustomerCreateBody,
  CustomerException,
  CustomerRowResponse,
  CustomerUpdateBody,
  SnackEvent,
  customerHttpService,
} from '@service';
import { customerStore } from '@store';
import { SetterOrUpdater } from 'recoil';

export class CustomerHook {
  useGetListCallback() {
    const [{ load, query }, setState] = customerStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await customerHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CustomerException(res.exception));
      }

      setState((prev) => ({
        ...prev,
        load: true,
        list:
          res.data.query.skip === 0
            ? res.data
            : {
                ...prev.list,
                rows: [...prev.list.rows, ...res.data.rows],
                query: res.data.query,
              },
      }));
    }, [load, query, setState]);
  }

  useMount() {
    const getList = this.useGetListCallback();

    useEffect(() => {
      getList();
    }, [getList]);
  }

  useUnMount() {
    const resetState = customerStore.useResetState();

    useEffect(() => {
      return () => {
        resetState();
      };
    }, [resetState]);
  }

  useScrollEnd(scrollEnd: boolean) {
    const setState = customerStore.useSetState();

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setState((prev) => {
        const skip = prev.query.skip + prev.query.take;

        if (prev.list.total > skip) {
          return { ...prev, load: true, query: { ...prev.query, skip } };
        }

        return prev;
      });
    }, [scrollEnd, setState]);
  }

  useCreateState() {
    return useState<CustomerCreateBody>({
      kr: '',
      en: '',
      alias: '',
      description: '',
    });
  }

  useCreateCallback(body: CustomerCreateBody) {
    const setState = customerStore.useSetState();

    return useCallback(async () => {
      const res = await customerHttpService.createRow(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new CustomerException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('고객사가 등록되었습니다.');
      setState((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          total: prev.list.total + 1,
          rows: [res.data, ...prev.list.rows],
        },
      }));

      return true;
    }, [body, setState]);
  }

  useUpdateState(row: CustomerRowResponse): [CustomerUpdateBody, SetterOrUpdater<CustomerUpdateBody>] {
    const [body, setBody] = useState<CustomerUpdateBody>({
      kr: '',
      en: '',
      alias: '',
      description: '',
    });

    useEffect(() => {
      setBody({
        kr: row.kr,
        en: row.en,
        alias: row.alias,
        description: row.description,
      });
    }, [row, setBody]);

    return [body, setBody];
  }

  useUpdateCallback(id: number, body: CustomerUpdateBody) {
    const setState = customerStore.useSetState();

    return useCallback(async () => {
      const res = await customerHttpService.updateRow(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new CustomerException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('고객사 정보가 저장되었습니다.');
      setState((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          rows: prev.list.rows.map((row) => (row.id === res.data.id ? res.data : row)),
        },
      }));

      return true;
    }, [id, body, setState]);
  }

  useDeleteCallback(id: number) {
    const setState = customerStore.useSetState();

    return useCallback(async () => {
      const res = await customerHttpService.deleteRow(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new CustomerException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('고객사 정보가 삭제되었습니다.');

      setState((prev) => {
        const total = prev.list.total - 1;
        const rows = prev.list.rows.filter((row) => row.id !== id);
        const load = rows.length < prev.query.take;

        return { ...prev, load, list: { ...prev.list, total, rows } };
      });

      return true;
    }, [id, setState]);
  }
}

export const customerHook = new CustomerHook();
