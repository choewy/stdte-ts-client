import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { timeRecordHook, timeRecordLayoutHook } from '@hook';

import { TimeRecordLayoutLogTabs } from './components';

export const TimeRecordLayout: FunctionComponent = () => {
  timeRecordHook.useParamID();
  timeRecordHook.useValidateID();

  timeRecordLayoutHook.useMount();
  timeRecordLayoutHook.useUnMount();

  return (
    <Box
      sx={{
        paddingX: 3,
        paddingLeft: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 1,
      }}
    >
      <TimeRecordLayoutLogTabs />
      <Outlet />
    </Box>
  );
};
