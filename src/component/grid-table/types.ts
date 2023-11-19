import { DataGridProps, GridCsvExportMenuItemProps, GridPrintExportMenuItemProps } from '@mui/x-data-grid';
import { FunctionComponent, ReactElement } from 'react';

export type GridTableToolbarProps = {
  column?: boolean;
  filter?: boolean;
  density?: boolean;
  exports?: {
    csv?: GridCsvExportMenuItemProps;
    print?: GridPrintExportMenuItemProps;
    customs?: FunctionComponent[];
  };
  buttons?: FunctionComponent[];
};

export type GridTableProps = Pick<
  DataGridProps,
  'onPaginationModelChange' | 'rowCount' | 'paginationModel' | 'columns' | 'rows' | 'loading'
> & {
  filterComponent?: ReactElement;
  toolbarProps?: GridTableToolbarProps;
};
