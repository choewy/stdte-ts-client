import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRow, TaskCategoryRowChild } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton: FunctionComponent<{
  parent: TaskCategoryRow;
  child: TaskCategoryRowChild;
}> = ({ parent, child }) => {
  const onClick = dialogHook.useTaskCategoryChildDialogCallback('delete', parent, true, child);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
