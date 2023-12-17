import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRow } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageTableBodyRowUpdateButton: FunctionComponent<{
  row: TaskCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryPageDialogCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
