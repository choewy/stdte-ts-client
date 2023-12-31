import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { credentialsHook, dialogHook } from '@hook';

import { MyPageUpdatePasswordDialogContent } from './my-page-update-password-dialog-content';
import { MyPageUpdatePasswordDialogAction } from './my-page-update-password-dialog-action';

export const MyPageUpdatePasswordDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useMyPageUpdatePasswordDialogCallback(false);

  const [body, setBody] = credentialsHook.useUpdateMyPasswordState();

  return (
    <DialogBoxy
      title="비밀번호 변경"
      open={dialog.mypage.updatePassword.open}
      onClose={onClose}
      contents={<MyPageUpdatePasswordDialogContent {...{ body, setBody }} />}
      actions={<MyPageUpdatePasswordDialogAction {...{ body, onClose }} />}
    />
  );
};
