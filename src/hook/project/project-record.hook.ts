import { useCallback, useEffect } from 'react';

import { ProjectRecordException, ProjectRecordType, SnackEvent, projectRecordHttpService } from '@service';
import { projectRecordStore } from '@store';

export class ProjectRecordHook {
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
}

export const projectRecordHook = new ProjectRecordHook();
