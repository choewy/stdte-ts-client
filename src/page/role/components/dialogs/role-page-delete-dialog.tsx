import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { RolePageDeleteDialogContent } from './role-page-delete-dialog-content';
import { RolePageDeleteDialogAction } from './role-page-delete-dialog-action';

export const RolePageDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useRolePageDialogsCallback('delete', dialog.role.delete.id, false);

  return (
    <DialogBoxy
      open={dialog.role.delete.open}
      onClose={onClose}
      title="역할을 삭제하시겠습니까?"
      contents={<RolePageDeleteDialogContent />}
      actions={<RolePageDeleteDialogAction id={dialog.role.delete.id} />}
    />
  );
};
