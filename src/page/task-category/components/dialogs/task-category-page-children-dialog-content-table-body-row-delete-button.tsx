import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRowChild } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton: FunctionComponent<{
  row: TaskCategoryRowChild;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryPageChildDialogCallback('delete', row, true);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
