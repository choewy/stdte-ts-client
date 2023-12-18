import { FunctionComponent } from 'react';

import { Dialog, DialogActions, DialogContent } from '@mui/material';

import { DialogFullScreenProps } from './types';
import { DialogTransition } from './dialog-transition';
import { DialogFullScreenToolbar } from './dialog-fullscreen-toolbar';

export const DialogFullScreen: FunctionComponent<DialogFullScreenProps> = ({
  title,
  actions,
  contents,
  children,
  onClose,
  disableEscClose,
  ...props
}) => {
  return (
    <Dialog
      {...props}
      fullScreen
      TransitionComponent={DialogTransition}
      onClose={disableEscClose ? undefined : onClose}
    >
      <DialogFullScreenToolbar title={title} onClose={onClose} />
      {contents && <DialogContent>{contents}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};
