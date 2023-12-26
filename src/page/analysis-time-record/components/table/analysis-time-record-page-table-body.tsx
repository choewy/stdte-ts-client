import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { analysisTimeRecordStore } from '@store';

import { AnalysisTimeRecordPageTableBodyRow } from './analysis-time-record-page-table-body-row';

export const AnalysisTimeRecordPageTableBody: FunctionComponent = () => {
  const { list } = analysisTimeRecordStore.useValue();

  return (
    <TableBody>
      {list.projects.map((row, i) => (
        <AnalysisTimeRecordPageTableBodyRow
          key={['analysis-time-record-page-table-body-row', row.id, i].join('-')}
          row={row}
          years={list.years}
          users={list.users}
        />
      ))}
    </TableBody>
  );
};
