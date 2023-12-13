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
        <Button
          {...{
            onClick: () => navigate(PagePath.SignIn),
            fullWidth: false,
            color: 'inherit',
            variant: 'outlined',
          }}
        >
          로그인
        </Button>
        <Button
          {...{
            onClick: () => navigate(PagePath.SignUp),
            fullWidth: false,
            color: 'inherit',
            variant: 'outlined',
          }}
        >
          회원가입
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button
        {...{
          onClick: () => navigate(PagePath.MyPage),
          fullWidth: false,
          color: 'inherit',
          variant: 'outlined',
        }}
      >
        내정보
      </Button>

      <Button
        {...{
          onClick: () => navigate(PagePath.SignOut),
          fullWidth: false,
          color: 'inherit',
          variant: 'outlined',
        }}
      >
        로그아웃
      </Button>
    </Box>
  );
};
