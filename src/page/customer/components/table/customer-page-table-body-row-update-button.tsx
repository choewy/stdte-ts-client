import { FunctionComponent } from 'react';

import { CustomerRow } from '@service';
import { TableCellButton } from '@component';
import { dialogHook } from '@hook';

export const CustomerPageTableBodyRowUpdateButton: FunctionComponent<{
  row: CustomerRow;
}> = ({ row }) => {
  const onClick = dialogHook.useCustomerDialogCallback('update', true, row);

  return <TableCellButton text="수정" onClick={onClick} />;
};
