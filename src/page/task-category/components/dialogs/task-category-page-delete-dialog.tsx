import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { TaskCategoryPageDeleteDialogContent } from './task-category-page-delete-dialog-content';
import { TaskCategoryPageDeleteDialogAction } from './task-category-page-delete-dialog-action';

export const TaskCategoryPageDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.taskCategory.delete.row;
  const onClose = dialogHook.useTaskCategoryDialogCallback('delete', false, row);

  return (
    <DialogBoxy
      title="수행업무구분을 삭제하시겠습니까?"
      open={dialog.taskCategory.delete.open}
      onClose={onClose}
      contents={<TaskCategoryPageDeleteDialogContent />}
      actions={<TaskCategoryPageDeleteDialogAction {...{ row, onClose }} />}
    />
  );
};
