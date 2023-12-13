import { FunctionComponent } from 'react';

import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { layoutHook } from '@hook';

export const HeaderIconButton: FunctionComponent = () => {
  const onClick = layoutHook.useSidebarCallback(true);

  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onClick}>
      <Menu />
    </IconButton>
  );
};
