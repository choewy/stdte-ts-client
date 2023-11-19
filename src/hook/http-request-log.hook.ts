import { useCallback, useEffect } from 'react';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';

import { HttpRequestLog, LuxonFormat, NotiEvent } from '@common';
import { HttpRequestLogStoreValueGenerator, httpRequestLogStore } from '@store';
import { dateTimeService, httpRequestLogApiService } from '@service';
import { GridTableProps } from '@component';

export class HttpRequestLogHook {
  useGetHttpRequestLogGridTableColumns(): GridColDef<HttpRequestLog>[] {
    return [
      {
        field: 'id',
        headerName: 'ID',
        headerAlign: 'center',
        align: 'left',
        width: 450,
      },
      {
        field: 'method',
        headerName: 'Method',
        headerAlign: 'center',
        align: 'center',
        width: 120,
        valueFormatter: ({ value }) => String(value).toUpperCase(),
      },
      {
        field: 'path',
        headerName: 'Path',
        headerAlign: 'center',
        align: 'left',
        width: 150,
      },
      {
        field: 'statusCode',
        headerName: 'Status',
        headerAlign: 'center',
        align: 'center',
        width: 120,
        valueGetter: ({ row }) => row.status?.code,
      },
      {
        field: 'statusMessage',
        headerName: 'Message',
        headerAlign: 'center',
        align: 'center',
        width: 120,
        valueGetter: ({ row }) => row.status?.message ?? row.exception?.name ?? row.error?.name,
      },
      {
        field: 'ip',
        headerName: 'IP',
        headerAlign: 'center',
        align: 'left',
        width: 120,
      },
      {
        field: 'user',
        headerName: 'User',
        headerAlign: 'center',
        align: 'center',
        width: 120,
        valueGetter: ({ value }) => value?.name ?? 'Null',
      },
      {
        field: 'requestAt',
        headerName: 'Request Date',
        headerAlign: 'center',
        align: 'center',
        width: 180,
        valueFormatter: ({ value }) => dateTimeService.toFormat(value, LuxonFormat.DateTime),
      },
      {
        field: 'responseAt',
        headerName: 'Response Date',
        headerAlign: 'center',
        align: 'center',
        width: 180,
        valueFormatter: ({ value }) => dateTimeService.toFormat(value, LuxonFormat.DateTime),
      },
    ];
  }

  useGetHttpRequestLogRows() {
    const [{ query }, setHttpRequestLog] = httpRequestLogStore.useState();

    return useCallback(async () => {
      const { ok, data, exception } = await httpRequestLogApiService.getLogList(query);

      if (ok === false) {
        return NotiEvent.dispatchException(exception);
      }

      setHttpRequestLog((prev) => new HttpRequestLogStoreValueGenerator(prev).setTotal(data.total).setRows(data.rows));
    }, [query]);
  }

  useOnPaginationModelChange() {
    const setHttpRequestLog = httpRequestLogStore.useSetState();

    return useCallback((model: GridPaginationModel) => {
      setHttpRequestLog((prev) =>
        new HttpRequestLogStoreValueGenerator(prev).setQuery({
          ...prev.query,
          skip: model.page,
          take: model.pageSize,
        }),
      );
    }, []);
  }

  useGetHttpRequestLogGridTableProps(): GridTableProps {
    const resetHttpRequestLog = httpRequestLogStore.useResetState();

    const { total, rows, query } = httpRequestLogStore.useValue();

    const columns = this.useGetHttpRequestLogGridTableColumns();
    const onPaginationModelChange = this.useOnPaginationModelChange();
    const getHttpRequestLogRows = this.useGetHttpRequestLogRows();

    useEffect(() => {
      getHttpRequestLogRows();
    }, [getHttpRequestLogRows]);

    useEffect(() => {
      return () => resetHttpRequestLog();
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

export const httpRequestLogHook = new HttpRequestLogHook();
