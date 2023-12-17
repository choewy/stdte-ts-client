import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook, taskCategoryHook } from '@hook';

import { TaskCategoryPageUpdateDialogContent } from './task-category-page-update-dialog-content';
import { TaskCategoryPageUpdateDialogAction } from './task-category-page-update-dialog-action';

export const TaskCategoryPageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.taskCategory.update.row;

  const onClose = dialogHook.useTaskCategoryPageDialogCallback('update', row, false);

  const [body, setBody] = taskCategoryHook.useUpdateState(row);

  return (
    <DialogBoxy
      title="수행업무구분 수정"
      open={dialog.taskCategory.update.open}
      onClose={onClose}
      contents={<TaskCategoryPageUpdateDialogContent {...{ body, setBody }} />}
      actions={<TaskCategoryPageUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
