import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { AnalysisTimeRecordPageTableHead } from './analysis-time-record-page-table-head';
import { AnalysisTimeRecordPageTableBody } from './analysis-time-record-page-table-body';
import { AnalysisTimeRecordPageTableSxMap } from './analysis-time-record-page-table-sx-map';

export const AnalysisTimeRecordPageTable: FunctionComponent = () => {
  const { size, theme } = layoutStore.useValue();

  const sxMap = new AnalysisTimeRecordPageTableSxMap(theme);

  return (
    <TableContainer component={Paper} elevation={3} sx={{ height: size.innerHeight - 150 }}>
      <Table stickyHeader>
        <AnalysisTimeRecordPageTableHead sxMap={sxMap} />
        <AnalysisTimeRecordPageTableBody sxMap={sxMap} />
      </Table>
    </TableContainer>
  );
};
