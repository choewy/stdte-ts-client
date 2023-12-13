import { FunctionComponent } from 'react';

import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { DialogBoxyProps } from './types';
import { DialogTransition } from './dialog-transition';

export const DialogBoxy: FunctionComponent<DialogBoxyProps> = ({ title, actions, contents, ...props }) => {
  return (
    <Dialog {...props} TransitionComponent={DialogTransition}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {contents && <DialogContent sx={{ mt: 1, minWidth: 400 }}>{contents}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};
