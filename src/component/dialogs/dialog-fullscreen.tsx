import { FunctionComponent } from 'react';

import { Dialog } from '@mui/material';

import { DialogFullScreenProps } from './types';
import { DialogTransition } from './dialog-transition';
import { DialogFullScreenToolbar } from './dialog-fullscreen-toolbar';

export const DialogFullScreen: FunctionComponent<DialogFullScreenProps> = ({
  title,
  actions,
  children,
  onClose,
  ...props
}) => {
  return (
    <Dialog {...props} fullScreen TransitionComponent={DialogTransition} onClose={onClose}>
      <DialogFullScreenToolbar title={title} actions={actions} onClose={onClose} />
      {children}
    </Dialog>
  );
};
