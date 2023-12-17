import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook, roleHook } from '@hook';

import { RolePageCreateDialogContent } from './role-page-create-dialog-content';
import { RolePageCreateDialogAction } from './role-page-create-dialog-action';

export const RolePageCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useRolePageCreateDialogCallback(false);

  const [body, setBody] = roleHook.useCreateState();

  return (
    <DialogBoxy
      title="역할 생성"
      open={dialog.role.create.open}
      onClose={onClose}
      contents={<RolePageCreateDialogContent {...{ body, setBody }} />}
      actions={<RolePageCreateDialogAction {...{ body, onClose }} />}
    />
  );
};
