import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { timeRecordHook, timeRecordLayoutHook } from '@hook';

import { TimeRecordLayoutLogTabs, TimeRecordLayoutToolbar } from './components';
import { layoutStore } from '@store';

export const TimeRecordLayout: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  timeRecordHook.useParamID();
  timeRecordHook.useValidateID();

  timeRecordLayoutHook.useMount();
  timeRecordLayoutHook.useUnMount();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 1,
        height: size.innerHeight - 65,
        paddingLeft: 0,
        paddingRight: 3,
        boxSizing: 'border-box',
      }}
    >
      <TimeRecordLayoutLogTabs />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          height: '100%',
        }}
      >
        <TimeRecordLayoutToolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
