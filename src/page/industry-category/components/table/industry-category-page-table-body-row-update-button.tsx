import { FunctionComponent } from 'react';

import { BusinessCategoryRow } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const IndustryCategoryPageTableBodyRowUpdateButton: FunctionComponent<{
  row: BusinessCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useIndustryCategoryDialogCallback('update', true, row);

  return <TableCellButton text="수정" onClick={onClick} />;
};
