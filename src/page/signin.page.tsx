import { FC } from 'react';

import { Box } from '@mui/material';

import { PageContainer } from '@component';
import { SignStyle } from '@common';

export const SignInPage: FC = () => {
  return (
    <PageContainer maxWidth="xs">
      <Box sx={SignStyle.Wrapper}></Box>
    </PageContainer>
  );
};
