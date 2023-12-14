import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

export const RolePageCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useRolePageCreateDialogCallback(false);

  return <DialogBoxy open={dialog.role.create.open} onClose={onClose} contents={<div>CONTENT</div>} />;
};
