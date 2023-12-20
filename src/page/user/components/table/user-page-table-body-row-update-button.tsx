import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { UserRow } from '@service';
import { TableCellEditButton } from '@component';

export const UserPageTableBodyRowUpdateButton: FunctionComponent<{ row: UserRow }> = ({ row }) => {
  const onClick = dialogHook.useUserDialogCallback('update', true, row);

  return <TableCellEditButton onClick={onClick} />;
};
