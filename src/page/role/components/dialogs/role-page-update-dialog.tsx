import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

export const RolePageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useRolePageDialogsCallback('update', dialog.role.update.id, false);

  return <DialogBoxy open={dialog.role.update.open} onClose={onClose} contents={<div>CONTENT</div>} />;
};
