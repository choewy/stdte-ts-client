import { useCallback, useEffect } from 'react';

import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';

import { NotiEvent, RolePolicyText, RolePolicyValue, RoleRow, toEnumText } from '@common';
import { RoleStoreValueGenerator, roleStore } from '@store';
import { roleApiService } from '@service';
import { GridTableProps } from '@component';

export class RoleHook {
  useGetRoleGridTableColumns(): GridColDef<RoleRow>[] {
    return [
      {
        field: 'id',
        headerName: 'ID',
        headerAlign: 'center',
        align: 'center',
        width: 120,
      },
      {
        field: 'name',
        headerName: '역할명',
        headerAlign: 'center',
        align: 'center',
        width: 200,
      },
      {
        field: 'users',
        headerName: '할당',
        headerAlign: 'center',
        align: 'center',
        width: 120,
        valueGetter: ({ row }) => `${row.users.length}명`,
      },
      {
        field: 'rolePolicy.accessRole',
        headerName: '역할 정보 접근 권한',
        headerAlign: 'center',
        align: 'center',
        width: 250,
        valueGetter: ({ row }) => toEnumText(RolePolicyValue, RolePolicyText, row.rolePolicy?.accessRole),
      },
      {
        field: 'rolePolicy.accessTeam',
        headerName: '팀 정보 접근 권한',
        headerAlign: 'center',
        align: 'center',
        width: 250,
        valueGetter: ({ row }) => toEnumText(RolePolicyValue, RolePolicyText, row.rolePolicy?.accessTeam),
      },
      {
        field: 'rolePolicy.accessUser',
        headerName: '계정 정보 접근 권한',
        headerAlign: 'center',
        align: 'center',
        width: 250,
        valueGetter: ({ row }) => toEnumText(RolePolicyValue, RolePolicyText, row.rolePolicy?.accessUser),
      },
      {
        field: 'rolePolicy.accessProject',
        headerName: '프로젝트 정보 접근 권한',
        headerAlign: 'center',
        align: 'center',
        width: 250,
        valueGetter: ({ row }) => toEnumText(RolePolicyValue, RolePolicyText, row.rolePolicy?.accessProject),
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
