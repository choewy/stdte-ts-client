import { Fragment, FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';
import { analysisUserRecordStore } from '@store';

import { AnalysisUserRecordPageTableSxMap } from './analysis-user-record-page-table-sx-map';

export const AnalysisUserRecordPageTableHead: FunctionComponent<{
  sxMap: AnalysisUserRecordPageTableSxMap;
}> = ({ sxMap }) => {
  const { list } = analysisUserRecordStore.useValue();

  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="" colSpan={3} stickyRow={0} sx={sxMap.emptyHeadCellSx()} />
        {list.years.map((year, i) => (
          <TableValueCell
            key={['analysis-user-record-page-table-head', year.year, i].join('-')}
            colSpan={6}
            value={`${year.year}년`}
          />
        ))}
      </TableRow>
      <TableRow>
        <TableValueCell value="연간통계" rowSpan={2} colSpan={3} stickyRow={1} sx={sxMap.totalHeadCellSx()} />
        {list.years.map((year, i) => (
          <Fragment key={['analysis-user-record-page-table-head-total-column', year.year, i].join('-')}>
            <TableValueCell value="총일수" stickyRow={1} />
            <TableValueCell value="평균일수" stickyRow={1} />
            <TableValueCell value="총개월수" stickyRow={1} />
            <TableValueCell value="평균개월수" stickyRow={1} />
            <TableValueCell value="입사자수" stickyRow={1} />
            <TableValueCell value="퇴사자수" stickyRow={1} />
          </Fragment>
        ))}
      </TableRow>
      <TableRow>
        {list.years.map((year, i) => (
          <Fragment key={['analysis-user-record-page-table-head-total-data', year.year, i].join('-')}>
            <TableValueCell value={`${year.days}일`} stickyRow={2} />
            <TableValueCell value={`${year.avgDays}일`} stickyRow={2} />
            <TableValueCell value={`${year.months}개월`} stickyRow={2} />
            <TableValueCell value={`${year.avgMonths}개월`} stickyRow={2} />
            <TableValueCell value={`${year.enter}명`} stickyRow={2} />
            <TableValueCell value={`${year.leave}명`} stickyRow={2} />
          </Fragment>
        ))}
      </TableRow>
      <TableRow>
        <TableValueCell value="이름" stickyRow={3} sx={sxMap.userNameHeadCellSx()} />
        <TableValueCell value="입사일자" stickyRow={3} sx={sxMap.userEnteringDayHeadCellSx()} />
        <TableValueCell value="퇴사일자" stickyRow={3} sx={sxMap.userResignationDayHeadCellSx()} />
        {list.years.map((year, i) => (
          <Fragment key={['analysis-user-record-page-table-head-column', year.year, i].join('-')}>
            <TableValueCell value="누적근속일수" stickyRow={3} colSpan={2} />
            <TableValueCell value="누적근속개월수" stickyRow={3} colSpan={2} />
            <TableValueCell value="비고" stickyRow={3} colSpan={2} />
          </Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
};
