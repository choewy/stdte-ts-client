import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { SignInForm } from './components';

export const SignInPage: FunctionComponent = () => {
  return (
    <Box maxWidth="xs" sx={{ mt: 10 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <SignInForm />
      </Box>
    </Box>
  );
};
