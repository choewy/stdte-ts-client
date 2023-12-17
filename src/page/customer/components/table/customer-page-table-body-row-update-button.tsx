import { FunctionComponent } from 'react';

import { CustomerRowResponse } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const CustomerPageTableBodyRowUpdateButton: FunctionComponent<{
  row: CustomerRowResponse;
}> = ({ row }) => {
  const onClick = dialogHook.useCustomerPageDialogCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
