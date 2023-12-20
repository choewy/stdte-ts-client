import { FunctionComponent } from 'react';

import { BusinessCategoryRow } from '@service';
import { TableCellDeleteButton } from '@component';
import { dialogHook } from '@hook';

export const IndustryCategoryPageTableBodyRowDeleteButton: FunctionComponent<{
  row: BusinessCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useIndustryCategoryDialogCallback('delete', true, row);

  return <TableCellDeleteButton onClick={onClick} />;
};
