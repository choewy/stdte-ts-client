import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { analysisProjectRecordStore } from '@store';

import { AnalysisProjectRecordPageTableBodyRow } from './analysis-project-records-page-table-body-row';

export const AnalysisProjectRecordPageTableBody: FunctionComponent = () => {
  const { tabIndex, list } = analysisProjectRecordStore.useValue();

  const years = list[tabIndex].years;
  const rows = list[tabIndex].rows;

  return (
    <TableBody>
      {rows.map((row, i) => (
        <AnalysisProjectRecordPageTableBodyRow
          key={['analysis-project-record-table-body-row', row.id, i].join('-')}
          years={years}
          row={row}
        />
      ))}
    </TableBody>
  );
};
