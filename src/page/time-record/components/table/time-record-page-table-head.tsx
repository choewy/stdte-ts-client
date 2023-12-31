import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';
import { TimeRecordPageTableHeadSumCells } from './time-record-page-table-head-sum-cells';
import { TimeRecordPageTableHeadDateCells } from './time-record-page-table-head-date-cells';
import { TimeRecordPageTableHeadMemoCells } from './time-record-page-table-head-memo-cells';

export const TimeRecordPageTableHead: FunctionComponent = () => {
  const sxMap = new TimeRecordPageTableSxMap();

  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="메모" colSpan={4} sx={sxMap.sumHeadCellSx()} stickyRow={0} />
        <TimeRecordPageTableHeadMemoCells stickyRow={0} />
      </TableRow>
      <TableRow>
        <TableValueCell value="합계" colSpan={4} sx={sxMap.sumHeadCellSx()} stickyRow={1} />
        <TimeRecordPageTableHeadSumCells sxMap={sxMap} stickyRow={1} />
      </TableRow>
      <TableRow>
        <TableValueCell value="사업" sx={sxMap.projectHeadCellSx()} colSpan={2} stickyRow={2} />
        <TableValueCell value="수행업무구분" sx={sxMap.categoryHeadCellSx()} colSpan={2} stickyRow={2} />
        <TimeRecordPageTableHeadDateCells sxMap={sxMap} stickyRow={2} />
      </TableRow>
      <TableRow>
        <>
          <TableValueCell value="사업명" sx={sxMap.projectNameHeadCellSx()} stickyRow={3} />
          <TableValueCell value="약어" sx={sxMap.projectCodeHeadCellSx()} stickyRow={3} />
        </>
        <>
          <TableValueCell value="대분류" sx={sxMap.categoryParentHeadCellSx()} stickyRow={3} />
          <TableValueCell value="소분류" sx={sxMap.categoryChildHeadCellSx()} stickyRow={3} />
        </>
      </TableRow>
    </TableHead>
  );
};
