import { FunctionComponent } from 'react';

import { List } from '@mui/material';

import { layoutStore, timeLayoutStore } from '@store';

import { TimeRecordPageTabLogListItem } from './time-record-layout-tab-log-list-item';

export const TimeRecordLayoutTabLogList: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  const { id, log } = timeLayoutStore.useValue();

  return (
    <List sx={{ overflow: 'auto', height: size.innerHeight - 130 }}>
      {log.rows.map((row, i) => (
        <TimeRecordPageTabLogListItem
          key={['time-record-layout-tab-log-list-item', row.id, i].join('-')}
          row={row}
          selected={row.id === id}
        />
      ))}
    </List>
  );
};
