import { FunctionComponent, useState } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import { TimeRecordPageTabLogList } from './time-record-layout-tab-log-list';

export const TimeRecordLayoutTabs: FunctionComponent = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <Box>
      <Tabs value={tabIndex} sx={{ width: 200, marginY: '5px' }} centered onChange={(_, v) => setTabIndex(v)}>
        <Tab value={1} label="인원" />
        <Tab value={2} label="메모" />
      </Tabs>
      <Box>
        {tabIndex === 1 && <TimeRecordPageTabLogList />}
        {tabIndex === 2 && <div>MEMO</div>}
      </Box>
    </Box>
  );
};