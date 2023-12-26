import { FunctionComponent } from 'react';

import { TableCellDeleteButton } from '@component';
import { TaskCategoryRow } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageTableBodyRowDeleteButton: FunctionComponent<{
  row: TaskCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryDialogCallback('delete', true, row);

  return <TableCellDeleteButton onClick={onClick} disabled={row.isReadonly} />;
};
