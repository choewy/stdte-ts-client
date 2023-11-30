import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { PageContainer } from '@component';
import { documentHook, profileHook } from '@hook';
import { BoxStyle } from '@common';

const MyPage: FunctionComponent = () => {
  const profile = profileHook.useGetMyProfile();

  const { height } = documentHook.useResponsiveSize(150);

  console.log(profile);

  return (
    <PageContainer maxWidth="lg">
      <Box sx={BoxStyle.MyPagePaper(height)}></Box>
    </PageContainer>
  );
};

export default MyPage;
