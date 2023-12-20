import { FunctionComponent } from 'react';

import { CustomerRow } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const CustomerPageTableBodyRowDeleteButton: FunctionComponent<{
  row: CustomerRow;
}> = ({ row }) => {
  const onClick = dialogHook.useCustomerDialogCallback('delete', true, row);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
