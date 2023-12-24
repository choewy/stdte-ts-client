import { Fragment, FunctionComponent } from 'react';

import { TableBody, TableRow } from '@mui/material';

import { TableValueCell } from '@component';
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
      <TableRow>
        <TableValueCell value="합계" />

        {years.map((row, i) => (
          <Fragment key={['analysis-project-record-table-body-row-total', row.year, i].join('-')}>
            <TableValueCell value={Number(row.amount ?? '0').toLocaleString('ko-KR')} />
            <TableValueCell value="100%" />
          </Fragment>
        ))}
      </TableRow>
    </TableBody>
  );
};
