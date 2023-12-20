import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook, taskCategoryHook } from '@hook';

import { TaskCategoryPageChildUpdateDialogContent } from './task-category-page-child-update-dialog-content';
import { TaskCategoryPageChildUpdateDialogAction } from './task-category-page-child-update-dialog-action';

export const TaskCategoryPageChildUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const parent = dialog.taskCategory.child.update.parent;
  const child = dialog.taskCategory.child.update.child;
  const onClose = dialogHook.useTaskCategoryChildDialogCallback('update', parent, false, child);

  const [body, setBody] = taskCategoryHook.useUpdateChildState(child);

  return (
    <DialogBoxy
      title="수행업무구분 소분류 수정"
      open={dialog.taskCategory.child.update.open}
      onClose={onClose}
      contents={<TaskCategoryPageChildUpdateDialogContent {...{ body, setBody }} />}
      actions={<TaskCategoryPageChildUpdateDialogAction {...{ parent, child, body, onClose }} />}
    />
  );
};
