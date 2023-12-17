import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook, roleHook } from '@hook';

import { RolePageUpdateDialogContent } from './role-page-update-dialog-content';
import { RolePageUpdateDialogAction } from './role-page-update-dialog-action';

export const RolePageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.role.update.row;

  const onClose = dialogHook.useRolePageDialogsCallback('update', row, false);

  const [body, setBody] = roleHook.useUpdateState(row);

  return (
    <DialogBoxy
      title="역할 수정"
      open={dialog.role.update.open}
      onClose={onClose}
      contents={<RolePageUpdateDialogContent {...{ body, setBody }} />}
      actions={<RolePageUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
