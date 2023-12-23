import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';
import { TimeRecordPageTableHeadSumCells } from './time-record-page-table-head-sum-cells';
import { TimeRecordPageTableHeadDateCells } from './time-record-page-table-head-date-cells';

export const TimeRecordPageTableHead: FunctionComponent = () => {
  const sxMap = new TimeRecordPageTableSxMap();

  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="합계" colSpan={4} stickyRow={0} sx={sxMap.sumHeadCellSx()} />
        <TimeRecordPageTableHeadSumCells sxMap={sxMap} />
      </TableRow>
      <TableRow>
        <TableValueCell value="사업" sx={sxMap.projectHeadCellSx()} colSpan={2} stickyRow={1} />
        <TableValueCell value="수행업무구분" sx={sxMap.categoryHeadCellSx()} colSpan={2} stickyRow={1} />
        <TimeRecordPageTableHeadDateCells sxMap={sxMap} />
      </TableRow>
      <TableRow>
        <>
          <TableValueCell value="사업명" sx={sxMap.projectNameHeadCellSx()} stickyRow={2} />
          <TableValueCell value="약어" sx={sxMap.projectCodeHeadCellSx()} stickyRow={2} />
        </>
        <>
          <TableValueCell value="대분류" sx={sxMap.categoryParentHeadCellSx()} stickyRow={2} />
          <TableValueCell value="소분류" sx={sxMap.categoryChildHeadCellSx()} stickyRow={2} />
        </>
      </TableRow>
    </TableHead>
  );
};
