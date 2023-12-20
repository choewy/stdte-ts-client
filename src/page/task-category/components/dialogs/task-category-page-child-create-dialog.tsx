import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook, taskCategoryHook } from '@hook';

import { TaskCategoryPageChildCreateDialogContent } from './task-category-page-child-create-dialog-content';
import { TaskCategoryPageChildCreateDialogAction } from './task-category-page-child-create-dialog-action';

export const TaskCategoryPageChildCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const parent = dialog.taskCategory.child.create.parent;
  const onClose = dialogHook.useTaskCategoryChildDialogCallback('create', parent, false);

  const [body, setBody] = taskCategoryHook.useCreateChildState(parent);

  return (
    <DialogBoxy
      title="수행업무구분 소분류 등록"
      open={dialog.taskCategory.child.create.open}
      onClose={onClose}
      contents={<TaskCategoryPageChildCreateDialogContent {...{ body, setBody }} />}
      actions={<TaskCategoryPageChildCreateDialogAction {...{ body, onClose }} />}
    />
  );
};
