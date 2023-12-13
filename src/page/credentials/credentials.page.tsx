import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { credentialsHook } from '@hook';

import { CredentialsTable, CredentialsTabs } from './components';

export const CredentialsPage: FunctionComponent = () => {
  const maxWidth = 1080;

  credentialsHook.useAdminCredentialsStats();
  credentialsHook.useAdminCredentialsList();

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
      <CredentialsTabs {...{ maxWidth }} />
      <CredentialsTable {...{ maxWidth }} />
    </Box>
  );
};
