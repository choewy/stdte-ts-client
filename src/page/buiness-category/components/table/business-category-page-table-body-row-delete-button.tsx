import { FunctionComponent } from 'react';

import { BusinessCategoryRowResponse } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const BusinessCategoryPageTableBodyRowDeleteButton: FunctionComponent<{
  row: BusinessCategoryRowResponse;
}> = ({ row }) => {
  const onClick = dialogHook.useBusinessCategoryPageDialogCallback('delete', row, true);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
