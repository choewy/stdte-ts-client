import { FunctionComponent } from 'react';

import { Box, Button } from '@mui/material';

import { GnbButtonGroupProps } from './types';
import { PagePath } from '@common';

export const GnbButtonGroup: FunctionComponent<GnbButtonGroupProps> = ({ auth, navigate }) => {
  if (auth) {
    return (
      <Box>
        <Button color="inherit" onClick={() => navigate(PagePath.MyPage)}>
          내 정보
        </Button>
        <Button color="inherit" onClick={() => navigate(PagePath.SignOut)}>
          로그아웃
        </Button>
      </Box>
    );
  } else {
    return (
      <Box>
        <Button color="inherit" onClick={() => navigate(PagePath.SignIn)}>
          로그인
        </Button>
        <Button color="inherit" onClick={() => navigate(PagePath.SignUp)}>
          회원가입
        </Button>
      </Box>
    );
  }
};
