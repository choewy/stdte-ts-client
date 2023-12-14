import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { CredentialsPageUpdatePasswordDialogContent } from './credentials-page-update-password-dialog-content';

export const CredentialsPageUpdatePasswordDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useCredentialsPageUpdatePasswordDialogCallback(
    dialog.credentials.updatePassword.id,
    false,
  );

  return (
    <DialogBoxy
      open={dialog.credentials.updatePassword.open}
      onClose={onClose}
      contents={<CredentialsPageUpdatePasswordDialogContent id={dialog.credentials.updatePassword.id} />}
    />
  );
};
