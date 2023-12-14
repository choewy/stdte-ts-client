import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { credentialsHook } from '@hook';

import { CredentialsPageUpdatePasswordDialog, CredentialsPageTabs, CredentialsPageTable } from './components';

export const CredentialsPage: FunctionComponent = () => {
  const maxWidth = 1080;

  credentialsHook.useMountCredentialsPage();
  credentialsHook.useUnmountCredentialsPage();

  return (
    <Box
      sx={{
        mt: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CredentialsPageUpdatePasswordDialog />
      <CredentialsPageTabs {...{ maxWidth }} />
      <CredentialsPageTable {...{ maxWidth }} />
    </Box>
  );
};
