import { Fragment, FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableValueCell } from '@component';
import { AnalysisTimeRecordProjectRow, AnalysisTimeRecordUserRow, AnalysisTimeRecordYearRow } from '@service';

export const AnalysisTimeRecordPageTableBodyUserRows: FunctionComponent<{
  open: boolean;
  row: AnalysisTimeRecordProjectRow;
  years: AnalysisTimeRecordYearRow[];
  users: AnalysisTimeRecordUserRow[];
}> = ({ open, row, years, users }) => {
  if (open === false) {
    return null;
  }

  return (
    <Fragment>
      {users.map((user, i) => (
        <TableRow key={['analysis-time-record-page-table-body-row-user', row.id, user.id, i].join('-')} hover>
          <TableValueCell value={user.name} />
          {years.map((year, i) => (
            <TableValueCell
              key={['analysis-time-record-page-table-body-row-user-year', row.id, user.id, year.year, i].join('-')}
              align="right"
              value={user.cols.find((col) => col.pid === row.id && col.year === year.year)?.time ?? '0.00'}
            />
          ))}
          <TableValueCell
            align="right"
            value={user.cols
              .reduce<number>((t, v) => {
                if (v.pid === row.id) {
                  t += Number(v.time);
                }
                return t;
              }, 0)
              .toFixed(2)}
          />
        </TableRow>
      ))}
    </Fragment>
  );
};
