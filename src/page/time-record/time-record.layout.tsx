import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { layoutStore } from '@store';
import { timeLayoutHook } from '@hook';

import { TimeRecordLayoutTabs, TimeRecordLayoutToolbar } from './components';

export const TimeRecordLayout: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  timeLayoutHook.useMount();
  timeLayoutHook.useUnMount();
  timeLayoutHook.useEventListeners();
  timeLayoutHook.useConnectSocket();
  timeLayoutHook.useBindParams();
  timeLayoutHook.useValidateUser();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: size.innerHeight - 65,
        paddingLeft: 0,
        paddingRight: 1,
        paddingBottom: 1,
        boxSizing: 'border-box',
      }}
    >
      <TimeRecordLayoutTabs />
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
