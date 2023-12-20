import { FunctionComponent } from 'react';

import { CustomerRow } from '@service';
import { TableCellDeleteButton } from '@component';
import { dialogHook } from '@hook';

export const CustomerPageTableBodyRowDeleteButton: FunctionComponent<{
  row: CustomerRow;
}> = ({ row }) => {
  const onClick = dialogHook.useCustomerDialogCallback('delete', true, row);

  return <TableCellDeleteButton onClick={onClick} />;
};
