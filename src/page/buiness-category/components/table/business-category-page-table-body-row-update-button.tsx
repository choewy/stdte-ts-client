import { FunctionComponent } from 'react';

import { BusinessCategoryRow } from '@service';
import { TableCellEditButton } from '@component';
import { dialogHook } from '@hook';

export const BusinessCategoryPageTableBodyRowUpdateButton: FunctionComponent<{
  row: BusinessCategoryRow;
}> = ({ row }) => {
  const onClick = dialogHook.useBusinessCategoryDialogCallback('update', true, row);

  return <TableCellEditButton onClick={onClick} />;
};
