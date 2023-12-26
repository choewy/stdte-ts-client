import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';

import { AnalysisProjectRecordPageTableHead } from './analysis-project-record-page-table-head';
import { AnalysisProjectRecordPageTableBody } from './analysis-project-record-page-table-body';
import { AnalysisProjectRecordPageTableSxMap } from './analysis-project-record-page-table-sx-map';

export const AnalysisProjectRecordPageTable: FunctionComponent = () => {
  const { theme, size } = layoutStore.useValue();

  const sxMap = new AnalysisProjectRecordPageTableSxMap(theme);

  return (
    <TableContainer component={Paper} elevation={2} sx={{ height: size.innerHeight - 150 }}>
      <Table stickyHeader>
        <AnalysisProjectRecordPageTableHead sxMap={sxMap} />
        <AnalysisProjectRecordPageTableBody sxMap={sxMap} />
      </Table>
    </TableContainer>
  );
};
