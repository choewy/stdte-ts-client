import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRow, TaskCategoryRowChild } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageChildrenDialogContentTableBodyRowUpdateButton: FunctionComponent<{
  parent: TaskCategoryRow;
  child: TaskCategoryRowChild;
}> = ({ parent, child }) => {
  const onClick = dialogHook.useTaskCategoryPageChildDialogCallback('update', parent, child, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
