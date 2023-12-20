import { FunctionComponent } from 'react';

import { DialogFullScreen } from '@component';
import { dialogStore, taskCategoryStore } from '@store';
import { dialogHook } from '@hook';

import { TaskCategoryPageChildrenDialogContent } from './task-category-page-children-dialog-content';
import { TASK_CATEGORY_ROW } from '@service';

export const TaskCategoryPageChildrenDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const parents = taskCategoryStore.useValue().list.rows;
  const parent = parents.find((parent) => parent.id === dialog.taskCategory.children.row.id) ?? TASK_CATEGORY_ROW;
  const row = dialog.taskCategory.children.row;
  const onClose = dialogHook.useTaskCategoryDialogCallback('children', false, row);

  return (
    <DialogFullScreen
      title={`수행업무구분 소분류 : ${parent?.name}`}
      open={dialog.taskCategory.children.open}
      onClose={onClose}
      contents={<TaskCategoryPageChildrenDialogContent {...{ parent }} />}
    />
  );
};
