import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { MyPageUpdatePasswordDialogContent } from './my-page-update-password-dialog-content';

export const MyPageUpdatePasswordDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useMyPageUpdatePasswordDialogCallback(false);

  return (
    <DialogBoxy
      open={dialog.mypage.updatePassword.open}
      onClose={onClose}
      contents={<MyPageUpdatePasswordDialogContent />}
    />
  );
};
