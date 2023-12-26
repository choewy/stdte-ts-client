import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';

import { AnalysisProjectRecordPageTableHead } from './analysis-project-record-page-table-head';
import { AnalysisProjectRecordPageTableBody } from './analysis-project-record-page-table-body';

export const AnalysisProjectRecordPageTable: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  return (
    <TableContainer component={Paper} elevation={2} sx={{ height: size.innerHeight - 150 }}>
      <Table stickyHeader>
        <AnalysisProjectRecordPageTableHead />
        <AnalysisProjectRecordPageTableBody />
      </Table>
    </TableContainer>
  );
};
