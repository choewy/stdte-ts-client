import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { industryCategoryStore } from '@store';
import {
  IndustryCategoryCreateBody,
  IndustryCategoryException,
  IndustryCategoryRow,
  IndustryCategoryUpdateBody,
  SnackEvent,
  industryCategoryHttpService,
} from '@service';

export class IndustryCategoryHook {
  useGetListCallback() {
    const [{ load, query }, setState] = industryCategoryStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await industryCategoryHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new IndustryCategoryException(res.exception));
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

  useMount() {
    const getList = this.useGetListCallback();

    useEffect(() => {
      getList();
    }, [getList]);
  }

  useUnMount() {
    const resetState = industryCategoryStore.useResetState();

    useEffect(() => {
      return () => {
        resetState();
      };
    }, [resetState]);
  }

  useScrollEnd(scrollEnd: boolean) {
    const setState = industryCategoryStore.useSetState();

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
    return useState<IndustryCategoryCreateBody>({
      name: '',
      description: '',
    });
  }

  useCreateCallback(body: IndustryCategoryCreateBody) {
    const setState = industryCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await industryCategoryHttpService.createRow(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new IndustryCategoryException(res.exception));
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

  useUpdateState(row: IndustryCategoryRow): [IndustryCategoryUpdateBody, SetterOrUpdater<IndustryCategoryUpdateBody>] {
    const [body, setBody] = useState<IndustryCategoryUpdateBody>({
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

  useUpdateCallback(id: number, body: IndustryCategoryUpdateBody) {
    const setState = industryCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await industryCategoryHttpService.updateRow(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new IndustryCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('산업분야 정보가 저장되었습니다.');
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
    const setState = industryCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await industryCategoryHttpService.deleteRow(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new IndustryCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('산업분야가 삭제되었습니다.');

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

export const industryCategoryHook = new IndustryCategoryHook();
