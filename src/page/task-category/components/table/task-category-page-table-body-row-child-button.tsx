import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRow } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageTableBodyRowChildButton: FunctionComponent<{
  row: TaskCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryDialogCallback('children', true, row);

  return <TableCellButton text={`${row.children.length}개`} onClick={onClick} />;
};
