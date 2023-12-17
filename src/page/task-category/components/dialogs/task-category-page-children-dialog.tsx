import { FunctionComponent } from 'react';

import { DialogFullScreen } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { TaskCategoryPageChildrenDialogContent } from './task-category-page-children-dialog-content';

export const TaskCategoryPageChildrenDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const parent = dialog.taskCategory.children.row;
  const onClose = dialogHook.useTaskCategoryPageDialogCallback('children', dialog.taskCategory.children.row, false);

  return (
    <DialogFullScreen
      title={`수행업무구분 소분류 : ${parent.name}`}
      open={dialog.taskCategory.children.open}
      onClose={onClose}
      contents={<TaskCategoryPageChildrenDialogContent {...{ parent }} />}
    />
  );
};
