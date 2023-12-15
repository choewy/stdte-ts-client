import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook, roleHook } from '@hook';
import { RolePageUsersDialogContent } from './role-page-users-dialog-content';
import { RolePageUsersDialogAction } from './role-page-users-dialog-action';

export const RolePageUsersDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.role.users.row;

  const onClose = dialogHook.useRolePageDialogsCallback('users', row, false);

  const [body, setBody] = roleHook.useRoleUsersState(row);

  return (
    <DialogBoxy
      open={dialog.role.users.open}
      onClose={onClose}
      title="역할 인원"
      contents={<RolePageUsersDialogContent {...{ name: row.name, body, setBody }} />}
      actions={<RolePageUsersDialogAction {...{ row, body, onClose }} />}
    />
  );
};
