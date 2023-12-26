import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { analysisTimeRecordStore } from '@store';

import { AnalysisTimeRecordPageTableBodyRow } from './analysis-time-record-page-table-body-row';
import { AnalysisTimeRecordPageTableSxMap } from './analysis-time-record-page-table-sx-map';

export const AnalysisTimeRecordPageTableBody: FunctionComponent<{
  sxMap: AnalysisTimeRecordPageTableSxMap;
}> = ({ sxMap }) => {
  const { list } = analysisTimeRecordStore.useValue();

  return (
    <TableBody>
      {list.projects.map((row, i) => (
        <AnalysisTimeRecordPageTableBodyRow
          key={['analysis-time-record-page-table-body-row', row.id, i].join('-')}
          sxMap={sxMap}
          row={row}
          years={list.years}
          users={list.users}
        />
      ))}
    </TableBody>
  );
};
