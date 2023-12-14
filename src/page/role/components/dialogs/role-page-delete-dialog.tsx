import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

export const RolePageDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useRolePageDialogsCallback('delete', dialog.role.delete.id, false);

  return <DialogBoxy open={dialog.role.delete.open} onClose={onClose} contents={<div>CONTENT</div>} />;
};
