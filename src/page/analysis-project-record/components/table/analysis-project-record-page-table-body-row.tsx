import { Fragment, FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { AnalysisProjectRecordRow, AnalysisProjectRecordYear } from '@service';
import { TableValueCell } from '@component';
import { AnalysisProjectRecordPageTableSxMap } from './analysis-project-record-page-table-sx-map';

export const AnalysisProjectRecordPageTableBodyRow: FunctionComponent<{
  sxMap: AnalysisProjectRecordPageTableSxMap;
  years: AnalysisProjectRecordYear[];
  row: AnalysisProjectRecordRow;
}> = ({ sxMap, years, row }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.row} sx={sxMap.nameBodyCellSx()} />
      {years.map((year, i) => {
        const col = row.cols.find((col) => col.year === year.year);

        return (
          <Fragment key={['analysis-project-record-table-body-row-values', year.year, i].join('-')}>
            <TableValueCell
              value={col?.amount == null ? '' : Number(col.amount).toLocaleString('ko-KR')}
              align="right"
              sx={{ minWidth: 120 }}
            />
            <TableValueCell value={col?.rate == null ? '' : `${col.rate}%`} align="right" sx={{ minWidth: 80 }} />
          </Fragment>
        );
      })}
    </TableRow>
  );
};
