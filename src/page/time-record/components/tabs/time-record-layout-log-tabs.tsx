import { FunctionComponent } from 'react';

import { Box, Tabs } from '@mui/material';

import { layoutStore, timeRecordLayoutStore, timeRecordStore } from '@store';

import { TimeRecordLayoutLogrTab } from './time-record-layout-log-tab';

export const TimeRecordLayoutLogTabs: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  const timeRecord = timeRecordStore.useValue();
  const timeRecordLayout = timeRecordLayoutStore.useValue();
  const timeRecordLogTabValue = timeRecordLayout.log.rows.findIndex((row) => row.id === timeRecord.id);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        width: 250,
        minWidth: 250,
        maxWidth: 250,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={timeRecordLogTabValue > -1 ? timeRecordLogTabValue : 0}
        sx={{
          marginTop: 2,
          height: size.innerHeight - 90,
          width: '100%',
          minWidth: 250,
          maxWidth: 250,
          borderRight: 1,
          borderColor: 'divider',
        }}
      >
        {timeRecordLayout.log.rows.map((row, i) => (
          <TimeRecordLayoutLogrTab
            {...{
              key: ['time-record-layout-log-tab', row.id, i].join('-'),
              row,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
