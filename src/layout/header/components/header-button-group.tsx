import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import { PagePath } from '@common';
import { credentialsStore } from '@store';

export const HeaderButtonGroup: FunctionComponent = () => {
  const navigate = useNavigate();
  const credentials = credentialsStore.useValue();

  if (credentials === null) {
    return null;
  }

  if (credentials === false) {
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

  return (
    <Box>
      <Button color="inherit" onClick={() => navigate(PagePath.MyPage)}>
        내정보
      </Button>
      <Button color="inherit" onClick={() => navigate(PagePath.SignOut)}>
        로그아웃
      </Button>
    </Box>
  );
};
