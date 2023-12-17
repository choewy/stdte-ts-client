import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRowChild } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageChildrenDialogContentTableBodyRowUpdateButton: FunctionComponent<{
  row: TaskCategoryRowChild;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryPageChildDialogCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
