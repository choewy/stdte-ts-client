import { FunctionComponent } from 'react';

import { TableValueCell } from '@component';
import { timeRecordLayoutStore } from '@store';

export const TimeRecordPageTableHeadDateCells: FunctionComponent = () => {
  const { date } = timeRecordLayoutStore.useValue();

  return (
    <>
      {date.rows.map((row, i) => (
        <TableValueCell
          key={['time-record-page-table-head-date-cell', row.date, i].join('-')}
          value={`${row.date.split('-').splice(1).join('/')}(${row.weekday})`}
          rowSpan={2}
          stickyRow={1}
          sx={{ color: row.color }}
        />
      ))}
    </>
  );
};
