import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { projectRecordStore } from '@store';
import {
  PROJECT_RECORD_SALE_CREATE_BODY,
  PROJECT_RECORD_UPDATE_BODY,
  ProjectRecordCreateBody,
  ProjectRecordException,
  ProjectRecordRow,
  ProjectRecordType,
  ProjectRecordUpdateBody,
  ProjectRow,
  SnackEvent,
  projectRecordHttpService,
  projectRecordTransformer,
} from '@service';

export class ProjectRecordHook {
  private getTargetNameByType(type: ProjectRecordType) {
    switch (type) {
      case ProjectRecordType.Order:
        return '수주 기록';

      case ProjectRecordType.Sale:
        return '매출 기록';

      default:
        return '';
    }
  }

  useGetListCallback(type: ProjectRecordType, project: number = 0) {
    const [state, setState] = projectRecordStore.useState();

    const { load, query } = state[type];

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      if (project === 0) {
        return;
      }

      const res = await projectRecordHttpService.getList(project, query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new ProjectRecordException(res.exception));
      }

      setState((prev) => {
        const target = prev[type];

        return {
          ...prev,
          [type]: {
            ...target,
            load: true,
            list:
              res.data.query.skip === 0
                ? res.data
                : {
                    ...target.list,
                    rows: [...target.list.rows, ...res.data.rows],
                    query: res.data.query,
                  },
          },
        };
      });
    }, [type, project, load, query, setState]);
  }

  useMount(project: number) {
    const getOrderList = this.useGetListCallback(ProjectRecordType.Order, project);
    const getSaleList = this.useGetListCallback(ProjectRecordType.Sale, project);

    useEffect(() => {
      getOrderList();
      getSaleList();
    }, [getOrderList, getSaleList]);
  }

  useUnMount() {
    const resetState = projectRecordStore.useResetState();

    useEffect(() => {
      return () => {
        resetState();
      };
    }, [resetState]);
  }

  useScrollEnd(type: ProjectRecordType, scrollEnd: boolean) {
    const setState = projectRecordStore.useSetState();

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setState((prev) => {
        const target = prev[type];
        const skip = target.query.skip + target.query.take;

        if (target.list.total > skip) {
          return {
            ...prev,
            [type]: { ...target, load: true, query: { ...target.query, skip } },
          };
        }

        return prev;
      });
    }, [type, scrollEnd, setState]);
  }

  useCreateState(
    type: ProjectRecordType,
    row: ProjectRow,
  ): [ProjectRecordCreateBody, SetterOrUpdater<ProjectRecordCreateBody>] {
    const [body, setBody] = useState<ProjectRecordCreateBody>(PROJECT_RECORD_SALE_CREATE_BODY);

    useEffect(() => {
      setBody({
        ...PROJECT_RECORD_SALE_CREATE_BODY,
        type,
        project: row.id,
      });
    }, [type, row]);

    return [body, setBody];
  }

  useCreateCallback(body: ProjectRecordCreateBody) {
    const targetName = this.getTargetNameByType(body.type);
    const setState = projectRecordStore.useSetState();

    return useCallback(async () => {
      const res = await projectRecordHttpService.createRow(projectRecordTransformer.createRow(body));

      if (res.ok === false) {
        SnackEvent.dispatchByException(new ProjectRecordException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess(`${targetName}이 등록되었습니다.`);

      setState((prev) => ({
        ...prev,
        [body.type]: {
          ...prev[body.type],
          list: {
            ...prev[body.type].list,
            total: prev[body.type].list.total + 1,
            rows: [...prev[body.type].list.rows, res.data],
          },
        },
      }));

      return true;
    }, [body, setState]);
  }

  useUpdateState(row: ProjectRecordRow): [ProjectRecordUpdateBody, SetterOrUpdater<ProjectRecordUpdateBody>] {
    const [body, setBody] = useState<ProjectRecordUpdateBody>(PROJECT_RECORD_UPDATE_BODY);

    useEffect(() => {
      setBody({
        date: row.date,
        amount: Number(row.amount).toLocaleString('ko-KR'),
        description: row.description,
      });
    }, [row, setBody]);

    return [body, setBody];
  }

  useUpdateCallback(type: ProjectRecordType, id: number, body: ProjectRecordUpdateBody) {
    const targetName = this.getTargetNameByType(type);
    const setState = projectRecordStore.useSetState();

    return useCallback(async () => {
      const res = await projectRecordHttpService.updateRow(type, id, projectRecordTransformer.updateRow(body));

      if (res.ok === false) {
        SnackEvent.dispatchByException(new ProjectRecordException(res.exception));

        return false;
      }

      SnackEvent.dispatchBySuccess(`${targetName}이 저장되었습니다.`);
      setState((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          list: { ...prev[type].list, rows: prev[type].list.rows.map((row) => (row.id === id ? res.data : row)) },
        },
      }));

      return true;
    }, [type, id, body, setState]);
  }

  useDeleteCallback(type: ProjectRecordType, id: number) {
    const targetName = this.getTargetNameByType(type);
    const setState = projectRecordStore.useSetState();

    return useCallback(async () => {
      const res = await projectRecordHttpService.deleteRow(type, id);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new ProjectRecordException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess(`${targetName}이 삭제되었습니다.`);

      setState((prev) => {
        const target = prev[type];
        const total = target.list.total - 1;
        const rows = target.list.rows.filter((row) => row.id !== id);
        const load = rows.length < target.query.take;

        return {
          ...prev,
          [type]: {
            ...target,
            load,
            list: { ...target.list, total, rows },
          },
        };
      });

      return true;
    }, [type, id, setState]);
  }
}

export const projectRecordHook = new ProjectRecordHook();
