import { NotiEvent, Role } from '@common';
import { GridTableProps } from '@component';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { roleApiService } from '@service';
import { RoleStoreValueGenerator, roleStore } from '@store';
import { useCallback, useEffect } from 'react';

export class RoleHook {
  useGetRoleGridTableColumns(): GridColDef<Role>[] {
    return [
      {
        field: 'id',
        headerName: 'ID',
        headerAlign: 'center',
        align: 'center',
        width: 80,
      },
    ];
  }

  useGetHttpRequestLogRows() {
    const [{ query }, setRole] = roleStore.useState();

    return useCallback(async () => {
      const { ok, data, exception } = await roleApiService.getRoleList(query);

      if (ok === false) {
        return NotiEvent.dispatchException(exception);
      }

      setRole((prev) => new RoleStoreValueGenerator(prev).setTotal(data.total).setRows(data.rows));
    }, [query]);
  }

  useOnPaginationModelChange() {
    const setRole = roleStore.useSetState();

    return useCallback((model: GridPaginationModel) => {
      setRole((prev) =>
        new RoleStoreValueGenerator(prev).setQuery({
          skip: model.page,
          take: model.pageSize,
        }),
      );
    }, []);
  }

  useGetRoleGridTableProps(): GridTableProps {
    const resetRole = roleStore.useResetState();

    const { total, rows, query } = roleStore.useValue();

    const columns = this.useGetRoleGridTableColumns();
    const onPaginationModelChange = this.useOnPaginationModelChange();
    const getRoleRows = this.useGetHttpRequestLogRows();

    useEffect(() => {
      getRoleRows();
    }, [getRoleRows]);

    useEffect(() => {
      return () => resetRole();
    }, []);

    return {
      rowCount: total,
      rows,
      columns,
      onPaginationModelChange,
      paginationModel: { page: query.skip, pageSize: query.take },
    };
  }
}

export const roleHook = new RoleHook();
