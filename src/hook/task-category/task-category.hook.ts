import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { taskCategoryStore } from '@store';
import {
  SnackEvent,
  TaskCategoryCreateBody,
  TaskCategoryException,
  TaskCategoryRow,
  TaskCategoryUpdateBody,
  taskCategoryHttpService,
} from '@service';

export class TaskCategoryHook {
  useGetListCallback() {
    const [{ load, query }, setState] = taskCategoryStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await taskCategoryHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new TaskCategoryException(res.exception));
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
    const resetState = taskCategoryStore.useResetState();

    useEffect(() => {
      return () => {
        resetState();
      };
    }, [resetState]);
  }

  useScrollEnd(scrollEnd: boolean) {
    const setState = taskCategoryStore.useSetState();

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
    return useState<TaskCategoryCreateBody>({
      name: '',
      description: '',
    });
  }

  useCreateCallback(body: TaskCategoryCreateBody) {
    const setState = taskCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await taskCategoryHttpService.createRow(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new TaskCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('수행업무구분이 등록되었습니다.');
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

  useUpdateState(row: TaskCategoryRow): [TaskCategoryUpdateBody, SetterOrUpdater<TaskCategoryUpdateBody>] {
    const [body, setBody] = useState<TaskCategoryUpdateBody>({
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

  useUpdateCallback(id: number, body: TaskCategoryUpdateBody) {
    const setState = taskCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await taskCategoryHttpService.updateRow(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new TaskCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('수행업무구분 정보가 저장되었습니다.');
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
    const setState = taskCategoryStore.useSetState();

    return useCallback(async () => {
      const res = await taskCategoryHttpService.deleteRow(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new TaskCategoryException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('수행업무구분이 삭제되었습니다.');

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

export const taskCategoryHook = new TaskCategoryHook();
