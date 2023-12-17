import { FunctionComponent } from 'react';

import { CustomerRowResponse } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const CustomerPageTableBodyRowDeleteButton: FunctionComponent<{
  row: CustomerRowResponse;
}> = ({ row }) => {
  const onClick = dialogHook.useCustomerPageDialogCallback('delete', row, true);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
