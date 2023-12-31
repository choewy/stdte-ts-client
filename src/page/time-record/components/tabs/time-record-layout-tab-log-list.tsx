import { FunctionComponent } from 'react';

import { List } from '@mui/material';

import { layoutStore, timeRecordLayoutStore, timeRecordStore } from '@store';

import { TimeRecordPageTabLogListItem } from './time-record-layout-tab-log-list-item';

export const TimeRecordPageTabLogList: FunctionComponent = () => {
  const size = layoutStore.useValue().size;
  const timeRecord = timeRecordStore.useValue();
  const timeRecordLayout = timeRecordLayoutStore.useValue();

  return (
    <List sx={{ overflow: 'auto', height: size.innerHeight - 130 }} className="scrollbar-disable">
      {timeRecordLayout.log.rows.map((row, i) => (
        <TimeRecordPageTabLogListItem
          key={['time-record-page-tab-log-list-item', row.id, i].join('-')}
          row={row}
          selected={timeRecord.id === row.id}
        />
      ))}
    </List>
  );
};
