import { FunctionComponent } from 'react';

import { BusinessCategoryRow } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const IndustryCategoryPageTableBodyRowDeleteButton: FunctionComponent<{
  row: BusinessCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useIndustryCategoryDialogCallback('delete', true, row);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
