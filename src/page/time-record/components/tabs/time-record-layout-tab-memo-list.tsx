import { FunctionComponent } from 'react';

import { List } from '@mui/material';

import { layoutStore, timeMemoStore } from '@store';

import { TimeRecordPageTabMemoListItem } from './time-record-layout-tab-memo-list-item';

export const TimeRecordLayoutTabMemoList: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  const { rows } = timeMemoStore.useValue();

  return (
    <List sx={{ overflow: 'auto', height: size.innerHeight - 130 }}>
      {rows.map((row, i) => (
        <TimeRecordPageTabMemoListItem key={['time-record-layout-tab-memo-list-item', row.id, i].join('-')} row={row} />
      ))}
    </List>
  );
};
