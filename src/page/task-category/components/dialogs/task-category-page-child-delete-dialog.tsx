import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { TaskCategoryPageChildDeleteDialogContent } from './task-category-page-child-delete-dialog-content';
import { TaskCategoryPageChildDeleteDialogAction } from './task-category-page-child-delete-dialog-action';

export const TaskCategoryPageChildDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const parent = dialog.taskCategory.child.delete.parent;
  const child = dialog.taskCategory.child.delete.child;
  const onClose = dialogHook.useTaskCategoryPageChildDialogCallback('delete', parent, child, false);

  return (
    <DialogBoxy
      title="수행업무구분 소분류를 삭제하시겠습니까?"
      open={dialog.taskCategory.child.delete.open}
      onClose={onClose}
      contents={<TaskCategoryPageChildDeleteDialogContent />}
      actions={<TaskCategoryPageChildDeleteDialogAction {...{ parent, child, onClose }} />}
    />
  );
};
