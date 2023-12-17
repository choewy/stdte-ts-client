import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook, taskCategoryHook } from '@hook';

import { TaskCategoryPageCreateDialogContent } from './task-category-page-create-dialog-content';
import { TaskCategoryPageCreateDialogAction } from './task-category-page-create-dialog-action';

export const TaskCategoryPageCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useTaskCategoryPageCreateDialogCallback(false);

  const [body, setBody] = taskCategoryHook.useCreateState();

  return (
    <DialogBoxy
      title="수행업무구분 등록"
      open={dialog.taskCategory.create.open}
      onClose={onClose}
      contents={<TaskCategoryPageCreateDialogContent {...{ body, setBody }} />}
      actions={<TaskCategoryPageCreateDialogAction {...{ body, onClose }} />}
    />
  );
};
