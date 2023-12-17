import { v4 } from 'uuid';

import { FunctionComponent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import { PagePath } from '@common';
import { authorizeStore } from '@store';
import { HeaderThemeSwitch } from './header-theme-switch';

export const HeaderButtonGroup: FunctionComponent = () => {
  const navigate = useNavigate();
  const credentials = authorizeStore.useValue();

  const elements: ReactElement[] = [<HeaderThemeSwitch key={v4()} />];

  if (credentials) {
    elements.push(
      <Button
        {...{
          key: v4(),
          children: '내정보',
          onClick: () => navigate(PagePath.MyPage),
          fullWidth: false,
          color: 'inherit',
          variant: 'outlined',
        }}
      />,
      <Button
        {...{
          key: v4(),
          children: '로그아웃',
          onClick: () => navigate(PagePath.SignOut),
          fullWidth: false,
          color: 'inherit',
          variant: 'outlined',
        }}
      />,
    );
  }

  if (credentials === false) {
    elements.push(
      <Button
        {...{
          key: v4(),
          children: '로그인',
          onClick: () => navigate(PagePath.SignIn),
          fullWidth: false,
          color: 'inherit',
          variant: 'outlined',
        }}
      />,
      <Button
        {...{
          key: v4(),
          onClick: () => navigate(PagePath.SignUp),
          children: '회원가입',
          fullWidth: false,
          color: 'inherit',
          variant: 'outlined',
        }}
      />,
    );
  }

  return <Box>{elements}</Box>;
};
