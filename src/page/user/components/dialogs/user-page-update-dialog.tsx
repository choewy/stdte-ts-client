import { FunctionComponent } from 'react';

import { dialogStore } from '@store';
import { dialogHook, userHook } from '@hook';
import { DialogFullScreen } from '@component';

import { UserPageUpdateDialogContent } from './user-page-update-dialog-content';
import { UserPageUpdateDialogAction } from './user-page-update-dialog-action';

export const UserPageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.user.update.row;

  const onClose = dialogHook.useUserPageDialogCallback('update', row, false);

  const [body, setBody] = userHook.useUpdateState(row);

  return (
    <DialogFullScreen
      title="구성원 정보 수정"
      open={dialog.user.update.open}
      onClose={onClose}
      contents={<UserPageUpdateDialogContent {...{ row, body, setBody }} />}
      actions={<UserPageUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
