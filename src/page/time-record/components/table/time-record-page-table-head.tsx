import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';
import { timeRecordLayoutStore, timeRecordStore } from '@store';

export const TimeRecordPageTableHead: FunctionComponent = () => {
  const { date } = timeRecordLayoutStore.useValue();
  const { sums } = timeRecordStore.useValue();

  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="합계" colSpan={4} stickyRow={0} sx={{ position: 'sticky', zIndex: 3, left: 0 }} />
        {date.rows.map((row, i) => (
          <TableValueCell
            key={['time-record-page-table-head-sum', row.date, i].join('-')}
            value={sums.find((sum) => sum.date === row.date)?.total}
          />
        ))}
      </TableRow>
      <TableRow>
        <TableValueCell
          value="사업"
          sx={{ position: 'sticky', zIndex: 3, left: 0, width: 300, minWidth: 300, maxWidth: 300 }}
          colSpan={2}
          stickyRow={1}
        />
        <TableValueCell
          value="수행업무구분"
          sx={{
            position: 'sticky',
            zIndex: 3,
            left: 300,
            width: 200,
            minWidth: 200,
            maxWidth: 200,
          }}
          colSpan={2}
          stickyRow={1}
        />
        {date.rows.map((row, i) => (
          <TableValueCell
            key={['time-record-page-table-head-date', row.date, i].join('-')}
            value={`${row.date.split('-').splice(1).join('/')}(${row.weekday})`}
            rowSpan={2}
            stickyRow={1}
          />
        ))}
      </TableRow>
      <TableRow>
        <>
          <TableValueCell
            value="사업명"
            stickyRow={2}
            sx={{
              position: 'sticky',
              zIndex: 3,
              left: 0,
              width: 200,
              minWidth: 200,
              maxWidth: 200,
            }}
          />
          <TableValueCell
            value="약어"
            stickyRow={2}
            sx={{
              position: 'sticky',
              zIndex: 3,
              left: 200,
              width: 100,
              minWidth: 100,
              maxWidth: 100,
            }}
          />
        </>
        <>
          <TableValueCell
            value="대분류"
            stickyRow={2}
            sx={{
              position: 'sticky',
              zIndex: 3,
              left: 300,
              width: 100,
              minWidth: 100,
              maxWidth: 100,
            }}
          />
          <TableValueCell
            value="소분류"
            stickyRow={2}
            sx={{
              position: 'sticky',
              zIndex: 3,
              left: 400,
              width: 100,
              minWidth: 100,
              maxWidth: 100,
            }}
          />
        </>
      </TableRow>
    </TableHead>
  );
};
