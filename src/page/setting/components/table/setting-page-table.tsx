import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';

import { SettingPageTableHead } from './setting-page-table-head';
import { SettingPageTableBody } from './setting-page-table-body';

export const SettingPageTable: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  return (
    <TableContainer component={Paper} variant="outlined" sx={{ height: size.innerHeight - 100, maxWidth: 600 }}>
      <Table stickyHeader>
        <SettingPageTableHead />
        <SettingPageTableBody />
      </Table>
    </TableContainer>
  );
};
