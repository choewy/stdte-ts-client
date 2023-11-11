import { FunctionComponent, useCallback } from 'react';

import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { GnbStyle } from '@common';

export const GnbIconButton: FunctionComponent = () => {
  const onClick = useCallback(() => {}, []);

  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={GnbStyle.IconButton} onClick={onClick}>
      <Menu />
    </IconButton>
  );
};
