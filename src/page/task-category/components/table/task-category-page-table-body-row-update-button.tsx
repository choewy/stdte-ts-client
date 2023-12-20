import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { TaskCategoryRow } from '@service';
import { dialogHook } from '@hook';

export const TaskCategoryPageTableBodyRowUpdateButton: FunctionComponent<{
  row: TaskCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useTaskCategoryDialogCallback('update', true, row);

  return <TableCellButton text="수정" onClick={onClick} />;
};
