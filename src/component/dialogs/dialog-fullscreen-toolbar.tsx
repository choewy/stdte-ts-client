import { FunctionComponent } from 'react';

import { Close } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import { DialogFullScreenToolbarProps } from './types';

export const DialogFullScreenToolbar: FunctionComponent<DialogFullScreenToolbarProps> = ({ title, onClose }) => {
  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
          <Close />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {title ?? null}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
