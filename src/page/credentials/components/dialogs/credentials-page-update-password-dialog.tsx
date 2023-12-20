import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { credentialsHook, dialogHook } from '@hook';

import { CredentialsPageUpdatePasswordDialogContent } from './credentials-page-update-password-dialog-content';
import { CredentialsPageUpdatePasswordDialogAction } from './credentials-page-update-password-dialog-action';

export const CredentialsPageUpdatePasswordDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useCredentialsUpdatePasswordDialogCallback(dialog.credentials.updatePassword.id, false);

  const [body, setBody] = credentialsHook.useUpdatePasswordByAdminState();

  return (
    <DialogBoxy
      title="비밀번호 변경"
      open={dialog.credentials.updatePassword.open}
      onClose={onClose}
      contents={<CredentialsPageUpdatePasswordDialogContent {...{ body, setBody }} />}
      actions={
        <CredentialsPageUpdatePasswordDialogAction {...{ id: dialog.credentials.updatePassword.id, body, onClose }} />
      }
    />
  );
};
