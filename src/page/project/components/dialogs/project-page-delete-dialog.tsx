import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { ProjectPageDeleteDialogContent } from './project-page-delete-dialog-content';
import { ProjectPageDeleteDialogAction } from './project-page-delete-dialog-action';

export const ProjectPageDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.project.delete.row;

  const onClose = dialogHook.useProjectPageDialogCallback('delete', row, false);

  return (
    <DialogBoxy
      title="사업 정보를 삭제하시겠습니까?"
      open={dialog.project.delete.open}
      onClose={onClose}
      contents={<ProjectPageDeleteDialogContent />}
      actions={<ProjectPageDeleteDialogAction {...{ row, onClose }} />}
    />
  );
};
