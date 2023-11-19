import { FunctionComponent } from 'react';

import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { GridTableProps } from './types';
import { GridTableStyle } from './grid-table.style';
import { GridTableAttribute } from './grid-table.atrribute';
import { GridTableToolbar } from './grid-table-toolbar';

export const GridTable: FunctionComponent<GridTableProps> = ({ toolbarProps, filterComponent, ...props }) => {
  return (
    <Box sx={GridTableStyle.Wrapper}>
      {filterComponent && filterComponent}
      <DataGrid
        {...GridTableAttribute.Default}
        {...props}
        slots={
          toolbarProps == null
            ? undefined
            : { ...GridTableAttribute.Slot, toolbar: () => <GridTableToolbar {...toolbarProps} /> }
        }
      />
    </Box>
  );
};
