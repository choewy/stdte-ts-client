import { FunctionComponent } from 'react';

import { BusinessCategoryRow } from '@service';
import { TableCellDeleteButton } from '@component';
import { dialogHook } from '@hook';

export const BusinessCategoryPageTableBodyRowDeleteButton: FunctionComponent<{
  row: BusinessCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useBusinessCategoryDialogCallback('delete', true, row);

  return <TableCellDeleteButton onClick={onClick} />;
};
