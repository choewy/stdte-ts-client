import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { credentialsHook } from '@hook';

import { CredentialsPageUpdatePasswordDialog, CredentialsPageTabs, CredentialsPageTable } from './components';

export const CredentialsPage: FunctionComponent = () => {
  credentialsHook.useMount();
  credentialsHook.useUnmount();

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
      <CredentialsPageUpdatePasswordDialog />
      <CredentialsPageTabs />
      <CredentialsPageTable />
    </Box>
  );
};
