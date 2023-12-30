import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { businessCategoryStore } from '@store';
import {
  BusinessCategoryCreateBody,
  BusinessCategoryException,
  BusinessCategoryRow,
  BusinessCategoryUpdateBody,
  SnackEvent,
  businessCategoryHttpService,
  downloadService,
} from '@service';

export class BusinessCategoryHook {
  useGetListCallback() {
    const [{ load, query }, setState] = businessCategoryStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await businessCategoryHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new BusinessCategoryException(res.exception));
      }

      setState((prev) => ({
        ...prev,
        load: true,
        list:
          res.data.query.skip === 0
            ? res.data
            : {
                ...prev.list,
                rows: [...prev.list.rows, ...res.data.rows].sort((x, y) => x.id - y.id),
                query: res.data.query,
              },
      }));
    }, [load, query, setState]);
  }

  useDownloadCallback() {
    return useCallback(async () => {
      const res = await businessCategoryHttpService.download();

      if (res.ok === false) {
        SnackEvent.dispatchByException(new BusinessCategoryException(res.exception));
        return false;
      }

      downloadService.download(res.data);
    }, []);
  }

  useMount() {
    const getList = this.useGetListCallback();

    useEffect(() => {
      getList();
    }, [getList]);
  }

  useUnMount() {
    const resetState = businessCategoryStore.useResetState();

    useEffect(() => {
      return () => {
        resetState();
      };
    }, [resetState]);
  }

  useScrollEnd(scrollEnd: boolean) {
    const setState = businessCategoryStore.useSetState();

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
    return useState<BusinessCategoryCreateBody>({
      name: '',
      description: '',
    });
  }

  useCreateCallback(body: BusinessCategoryCreateBody) {
    const setState = businessCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await businessCategoryHttpService.createRow(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new BusinessCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('사업구분이 등록되었습니다.');
      setState((prev) => ({
        ...prev,
        list: {
          ...prev.list,
          total: prev.list.total + 1,
          rows: [...prev.list.rows, res.data],
        },
      }));

      return true;
    }, [body, setState]);
  }

  useUpdateState(row: BusinessCategoryRow): [BusinessCategoryUpdateBody, SetterOrUpdater<BusinessCategoryUpdateBody>] {
    const [body, setBody] = useState<BusinessCategoryUpdateBody>({
      name: '',
      description: '',
    });

    useEffect(() => {
      setBody({
        name: row.name,
        description: row.description,
      });
    }, [row, setBody]);

    return [body, setBody];
  }

  useUpdateCallback(id: number, body: BusinessCategoryUpdateBody) {
    const setState = businessCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await businessCategoryHttpService.updateRow(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new BusinessCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('사업구분 정보가 저장되었습니다.');
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
    const setState = businessCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await businessCategoryHttpService.deleteRow(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new BusinessCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('사업구분이 삭제되었습니다.');

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

export const businessCategoryHook = new BusinessCategoryHook();
