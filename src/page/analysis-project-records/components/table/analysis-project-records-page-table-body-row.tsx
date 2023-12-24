import { Fragment, FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { AnalysisProjectRecordRow, AnalysisProjectRecordYear } from '@service';
import { TableValueCell } from '@component';

export const AnalysisProjectRecordPageTableBodyRow: FunctionComponent<{
  years: AnalysisProjectRecordYear[];
  row: AnalysisProjectRecordRow;
}> = ({ years, row }) => {
  return (
    <TableRow>
      <TableValueCell value={row.row} />
      {years.map((year, i) => {
        const col = row.cols.find((col) => col.year === year.year);

        return (
          <Fragment key={['analysis-project-record-table-body-row-values', year.year, i].join('-')}>
            <TableValueCell value={col?.amount == null ? '' : Number(col.amount).toLocaleString('ko-KR')} />
            <TableValueCell value={col?.rate == null ? '' : `${col.rate}%`} />
          </Fragment>
        );
      })}
    </TableRow>
  );
};
