import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';

import { AnalysisUserRecordPageTableHead } from './analysis-user-record-page-table-head';
import { AnalysisUserRecordPageTableBody } from './analysis-user-record-page-table-body';
import { AnalysisUserRecordPageTableSxMap } from './analysis-user-record-page-table-sx-map';

export const AnalysisUserRecordPageTable: FunctionComponent = () => {
  const { size, theme } = layoutStore.useValue();

  const sxMap = new AnalysisUserRecordPageTableSxMap(theme);

  return (
    <TableContainer component={Paper} variant="outlined" sx={{ height: size.innerHeight - 150 }}>
      <Table stickyHeader>
        <AnalysisUserRecordPageTableHead sxMap={sxMap} />
        <AnalysisUserRecordPageTableBody sxMap={sxMap} />
      </Table>
    </TableContainer>
  );
};
