import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { projectStore } from '@store';
import {
  PROJECT_CREATE_BODY,
  PROJECT_UPDATE_BODY,
  ProjectCreateBody,
  ProjectException,
  ProjectRow,
  ProjectUpdateBody,
  SnackEvent,
  projectHttpService,
  projectValidator,
  projectTransformer,
  downloadService,
} from '@service';

export class ProjectHook {
  useGetListCallback() {
    const [{ load, query }, setState] = projectStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await projectHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new ProjectException(res.exception));
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

  useDownloadCallback() {
    return useCallback(async () => {
      const res = await projectHttpService.download();

      if (res.ok === false) {
        SnackEvent.dispatchByException(new ProjectException(res.exception));
        return false;
      }

      downloadService.download(res.data.url, res.data.filename);
    }, []);
  }

  useMount() {
    const getList = this.useGetListCallback();

    useEffect(() => {
      getList();
    }, [getList]);
  }

  useUnMount() {
    const resetState = projectStore.useResetState();

    useEffect(() => {
      return () => {
        resetState();
      };
    }, [resetState]);
  }

  useScrollEnd(scrollEnd: boolean) {
    const setState = projectStore.useSetState();

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
    return useState<ProjectCreateBody>(PROJECT_CREATE_BODY);
  }

  useCreateCallback(body: ProjectCreateBody) {
    const setState = projectStore.useSetState();

    return useCallback(async () => {
      const message = projectValidator.createRow(body);

      if (message) {
        SnackEvent.dispatchByWarning(message);
        return false;
      }

      const res = await projectHttpService.createRow(projectTransformer.createRow(body));

      if (res.ok === false) {
        SnackEvent.dispatchByException(new ProjectException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('사업 정보가 등록되었습니다.');

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

  useUpdateState(row: ProjectRow): [ProjectUpdateBody, SetterOrUpdater<ProjectUpdateBody>] {
    const [body, setBody] = useState<ProjectUpdateBody>(PROJECT_UPDATE_BODY);

    useEffect(() => {
      setBody({
        name: row.name,
        code: row.code,
        description: row.description,
        difficulty: row.difficulty,
        amount: Number(row.amount).toLocaleString('ko-KR'),
        status: row.status,
        startDate: row.startDate,
        endDate: row.endDate,
        customer: row.customer?.id ?? 0,
        businessCategory: row.businessCategory?.id ?? 0,
        industryCategory: row.industryCategory?.id ?? 0,
        taskCategory: row.taskCategory?.id ?? 0,
        externalOwners: row.externalOwners.map(({ id }) => id),
        externalManagers: row.externalManagers.map(({ id }) => id),
        externalLeaders: row.externalLeaders.map(({ id }) => id),
        internalOwners: row.internalOwners.map(({ id }) => id),
        internalManagers: row.internalManagers.map(({ id }) => id),
        internalLeaders: row.internalLeaders.map(({ id }) => id),
        canExpose: row.canExpose,
      });
    }, [row, setBody]);

    return [body, setBody];
  }

  useUpdateCallback(id: number, body: ProjectUpdateBody) {
    const setState = projectStore.useSetState();

    return useCallback(async () => {
      const message = projectValidator.updateRow(body);

      if (message) {
        SnackEvent.dispatchByWarning(message);
        return false;
      }

      const res = await projectHttpService.updateRow(id, projectTransformer.updateRow(body));

      if (res.ok === false) {
        SnackEvent.dispatchByException(new ProjectException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('사업 정보가 저장되었습니다.');
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
    const setState = projectStore.useSetState();

    return useCallback(async () => {
      const res = await projectHttpService.deleteRow(id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new ProjectException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('사업 정보가 삭제되었습니다.');

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

export const projectHook = new ProjectHook();
