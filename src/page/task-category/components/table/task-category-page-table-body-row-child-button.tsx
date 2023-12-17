import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRow } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageTableBodyRowChildButton: FunctionComponent<{
  row: TaskCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryPageDialogCallback('children', row, true);

  return <TableCellButton text={`${row.children.length}개`} onClick={onClick} />;
};
