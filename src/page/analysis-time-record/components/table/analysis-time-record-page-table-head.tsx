import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';
import { analysisTimeRecordStore } from '@store';
import { AnalysisTimeRecordPageTableSxMap } from './analysis-time-record-page-table-sx-map';

export const AnalysisTimeRecordPageTableHead: FunctionComponent<{
  sxMap: AnalysisTimeRecordPageTableSxMap;
}> = ({ sxMap }) => {
  const { list } = analysisTimeRecordStore.useValue();

  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="사업명" stickyRow={0} sx={sxMap.projectNameHeadCellSx()} />
        {list.years.map((col, i) => (
          <TableValueCell
            key={['analysis-time-record-page-table-head-year', col.year, i].join('-')}
            value={`${col.year}년`}
            sx={{ minWidth: 100, maxWidth: 100 }}
          />
        ))}
        <TableValueCell value="합계" stickyRow={0} />
      </TableRow>
      <TableRow>
        <TableValueCell value="합계" sx={sxMap.totalHeadCellSx()} stickyRow={1} />
        {list.years.map((col, i) => (
          <TableValueCell
            key={['analysis-time-record-page-table-head-total', col.year, i].join('-')}
            value={Number(col.time).toLocaleString()}
            align="right"
            sx={{ minWidth: 100, width: 100, maxWidth: 100 }}
            stickyRow={1}
          />
        ))}
        <TableValueCell
          value={list.years
            .reduce<number>((t, v) => {
              t += Number(v.time);
              return t;
            }, 0)
            .toLocaleString()}
          align="right"
          sx={{ minWidth: 100, width: 100, maxWidth: 100 }}
          stickyRow={1}
        />
      </TableRow>
    </TableHead>
  );
};
