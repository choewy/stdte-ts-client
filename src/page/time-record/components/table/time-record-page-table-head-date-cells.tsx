import { FunctionComponent } from 'react';

import { TableValueCell } from '@component';
import { timeLayoutStore } from '@store';

import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';

export const TimeRecordPageTableHeadDateCells: FunctionComponent<{
  sxMap: TimeRecordPageTableSxMap;
  stickyRow: number;
}> = ({ sxMap, stickyRow }) => {
  const { date } = timeLayoutStore.useValue();

  return (
    <>
      {date.rows.map((row, i) => (
        <TableValueCell
          key={['time-record-page-table-head-date-cell', row.date, i].join('-')}
          value={`${row.date.split('-').splice(1).join('/')}(${row.weekday})`}
          rowSpan={2}
          sx={sxMap.defaultCellSx({ color: row.color })}
          stickyRow={stickyRow}
        />
      ))}
    </>
  );
};
