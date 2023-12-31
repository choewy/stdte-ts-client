import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';

import { TimeRecordPageTableHead } from './time-record-page-table-head';
import { TimeRecordPageTableBody } from './time-record-page-table-body';

export const TimeRecordPageTable: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{
        width: '100%',
        maxWidth: size.innerWidth - 200,
        height: size.innerHeight - 100,
      }}
    >
      <Table stickyHeader>
        <TimeRecordPageTableHead />
        <TimeRecordPageTableBody />
      </Table>
    </TableContainer>
  );
};
