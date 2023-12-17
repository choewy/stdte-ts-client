import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRow } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageTableBodyRowDeleteButton: FunctionComponent<{
  row: TaskCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryPageDialogCallback('delete', row, true);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
