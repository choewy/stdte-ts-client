import { FunctionComponent } from 'react';

import { BusinessCategoryRowResponse } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const IndustryCategoryPageTableBodyRowDeleteButton: FunctionComponent<{
  row: BusinessCategoryRowResponse;
}> = ({ row }) => {
  const onClick = dialogHook.useIndustryCategoryPageDialogCallback('delete', row, true);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
