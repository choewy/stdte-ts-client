import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { analysisProjectRecordStore } from '@store';

import { AnalysisProjectRecordPageTableBodyRow } from './analysis-project-record-page-table-body-row';
import { AnalysisProjectRecordPageTableSxMap } from './analysis-project-record-page-table-sx-map';

export const AnalysisProjectRecordPageTableBody: FunctionComponent<{
  sxMap: AnalysisProjectRecordPageTableSxMap;
}> = ({ sxMap }) => {
  const { tabIndex, list } = analysisProjectRecordStore.useValue();

  const years = list[tabIndex].years;
  const rows = list[tabIndex].rows;

  return (
    <TableBody>
      {rows.map((row, i) => (
        <AnalysisProjectRecordPageTableBodyRow
          key={['analysis-project-record-table-body-row', row.id, i].join('-')}
          sxMap={sxMap}
          years={years}
          row={row}
        />
      ))}
    </TableBody>
  );
};
