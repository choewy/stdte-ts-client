import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { MyPageUpdatePAsswordDialogContent } from './my-page-update-password-dialog-content';

export const MyPageUpdatePasswordDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useProfileUpdatePasswordDialogCallback(false);

  return (
    <DialogBoxy
      open={dialog.profile.updatePassword}
      onClose={onClose}
      contents={<MyPageUpdatePAsswordDialogContent />}
    />
  );
};
