import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { profileHook } from '@hook';

import { MyPageCards, MyPageUpdatePasswordDialog } from './components';

export const MyPage: FunctionComponent = () => {
  profileHook.useMyProfile();

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <MyPageUpdatePasswordDialog />
      <MyPageCards />
    </Box>
  );
};
