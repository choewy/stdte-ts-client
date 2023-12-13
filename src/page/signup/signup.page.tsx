import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { SignUpForm } from './components';

export const SignUpPage: FunctionComponent = () => {
  return (
    <Box maxWidth="xs" sx={{ mt: 10 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <SignUpForm />
      </Box>
    </Box>
  );
};
