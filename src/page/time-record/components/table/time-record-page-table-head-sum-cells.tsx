import { FunctionComponent } from 'react';

import { TableValueCell } from '@component';
import { timeRecordLayoutStore, timeRecordStore } from '@store';

export const TimeRecordPageTableHeadSumCells: FunctionComponent = () => {
  const { date } = timeRecordLayoutStore.useValue();
  const { sums } = timeRecordStore.useValue();

  return (
    <>
      {date.rows.map((row, i) => (
        <TableValueCell
          key={['time-record-page-table-head-sum-cell', row.date, i].join('-')}
          value={sums.find((sum) => sum.date === row.date)?.total}
          sx={{ color: row.color }}
        />
      ))}
    </>
  );
};
