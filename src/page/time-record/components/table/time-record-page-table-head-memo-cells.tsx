import { FunctionComponent } from 'react';

import { timeLayoutStore, timeMemoStore } from '@store';

import { TimeRecordPageTableHeadMemoCell } from './time-record-page-table-head-memo-cell';

export const TimeRecordPageTableHeadMemoCells: FunctionComponent<{
  stickyRow: number;
}> = ({ stickyRow }) => {
  const { editable, date } = timeLayoutStore.useValue();
  const { rows } = timeMemoStore.useValue();

  return (
    <>
      {date.rows.map((row, i) => {
        const memo = rows.find((memo) => memo.date === row.date);

        return (
          <TimeRecordPageTableHeadMemoCell
            key={['time-record-page-table-head-memo-cell', row.date, i].join('-')}
            stickyRow={stickyRow}
            editable={editable}
            id={memo?.id ?? 0}
            date={row.date}
            text={memo?.text ?? ''}
            updatedAt={memo?.updatedAt ?? ''}
          />
        );
      })}
    </>
  );
};
