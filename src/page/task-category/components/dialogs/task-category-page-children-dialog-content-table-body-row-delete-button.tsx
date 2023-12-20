import { FunctionComponent } from 'react';

import { TableCellDeleteButton } from '@component';
import { TaskCategoryRow, TaskCategoryRowChild } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton: FunctionComponent<{
  parent: TaskCategoryRow;
  child: TaskCategoryRowChild;
}> = ({ parent, child }) => {
  const onClick = dialogHook.useTaskCategoryChildDialogCallback('delete', parent, true, child);

  return <TableCellDeleteButton onClick={onClick} />;
};
