import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { PageContainer } from '@component';

import { SignInForm } from './components';
import { SignInPageStyle } from './signin.page.style';

export const SignInPage: FunctionComponent = () => {
  return (
    <PageContainer maxWidth="xs" sx={SignInPageStyle.Container()}>
      <Box sx={SignInPageStyle.Wrapper()}>
        <SignInForm />
      </Box>
    </PageContainer>
  );
};
