import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { AnalysisTimeRecordPageTableHead } from './analysis-time-record-page-table-head';
import { AnalysisTimeRecordPageTableBody } from './analysis-time-record-page-table-body';

export const AnalysisTimeRecordPageTable: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  return (
    <TableContainer component={Paper} elevation={3} sx={{ height: size.innerHeight - 150 }}>
      <Table stickyHeader>
        <AnalysisTimeRecordPageTableHead />
        <AnalysisTimeRecordPageTableBody />
      </Table>
    </TableContainer>
  );
};
