import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { PageContainer } from '@component';

import { SignUpForm } from './components';
import { SignUpPageStyle } from './signup.page.style';

export const SignUpPage: FunctionComponent = () => {
  return (
    <PageContainer maxWidth="xs" sx={SignUpPageStyle.Container()}>
      <Box sx={SignUpPageStyle.Wrapper()}>
        <SignUpForm />
      </Box>
    </PageContainer>
  );
};
