import { FunctionComponent } from 'react';

import { BusinessCategoryRow } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const BusinessCategoryPageTableBodyRowUpdateButton: FunctionComponent<{
  row: BusinessCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useBusinessCategoryPageDialogCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
