import { FunctionComponent } from 'react';

import { Dialog, DialogActions, DialogContent, DialogTitle, SxProps } from '@mui/material';

import { DialogBoxyProps } from './types';
import { DialogTransition } from './dialog-transition';

const dialogContentSx: SxProps = {
  mt: 1,
  minWidth: 600,
};

export const DialogBoxy: FunctionComponent<DialogBoxyProps> = ({ title, actions, contents, ...props }) => {
  return (
    <Dialog {...props} TransitionComponent={DialogTransition}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {contents && <DialogContent sx={dialogContentSx}>{contents}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};
