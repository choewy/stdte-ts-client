import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { SettingDialog, SettingPageTable } from './components';

export const SettingPage: FunctionComponent = () => {
  return (
    <Box
      sx={{
        mt: 2,
        paddingX: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SettingDialog />
      <SettingPageTable />
    </Box>
  );
};
