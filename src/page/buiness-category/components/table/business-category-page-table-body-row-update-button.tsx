import { FunctionComponent } from 'react';

import { BusinessCategoryRowResponse } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const BusinessCategoryPageTableBodyRowUpdateButton: FunctionComponent<{
  row: BusinessCategoryRowResponse;
}> = ({ row }) => {
  const onClick = dialogHook.useBusinessCategoryPageDialogCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
