import { FunctionComponent } from 'react';

import { TableCellEditButton } from '@component';
import { TaskCategoryRow } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageTableBodyRowUpdateButton: FunctionComponent<{
  row: TaskCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryDialogCallback('update', true, row);

  return <TableCellEditButton onClick={onClick} />;
};
