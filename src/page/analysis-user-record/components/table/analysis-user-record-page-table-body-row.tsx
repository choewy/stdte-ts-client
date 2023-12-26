import { Fragment, FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableValueCell } from '@component';
import { AnalysisUserRecordUserRow, AnalysisUserRecordYearRow } from '@service';

import { AnalysisUserRecordPageTableSxMap } from './analysis-user-record-page-table-sx-map';

export const AnalysisUserRecordPageTableBodyRow: FunctionComponent<{
  sxMap: AnalysisUserRecordPageTableSxMap;
  years: AnalysisUserRecordYearRow[];
  user: AnalysisUserRecordUserRow;
}> = ({ years, user, sxMap }) => {
  return (
    <TableRow hover>
      <TableValueCell value={user.name} sx={sxMap.userNameBodyCellSx()} />
      <TableValueCell value={user.enteringDay} sx={sxMap.userEnteringDayBodyCellSx()} />
      <TableValueCell value={user.resignationDay} sx={sxMap.userResignationDayBodyCellSx()} />
      {years.map((year, i) => {
        const col = user.cols.find((col) => col.year === year.year);
        const description = [col?.descriptions?.entered && '입사', col?.descriptions?.leaved && '퇴사']
          .filter((v) => v)
          .join(', ');

        return (
          <Fragment key={['analysis-user-record-=page-table-body-row-year', user.id, year.year, i].join('-')}>
            <TableValueCell value={col?.days == null ? '' : `${col.days}일`} colSpan={2} />
            <TableValueCell value={col?.months == null ? '' : `${col.months}개월`} colSpan={2} />
            <TableValueCell value={description} colSpan={2} />
          </Fragment>
        );
      })}
    </TableRow>
  );
};
