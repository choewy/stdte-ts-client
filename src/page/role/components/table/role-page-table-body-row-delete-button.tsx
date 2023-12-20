import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { RoleRow } from '@service';
import { TableCellDeleteButton } from '@component';

export const RolePageTableBodyRowDeleteButton: FunctionComponent<{ row: RoleRow }> = ({ row }) => {
  const onClick = dialogHook.useRoleDialogsCallback('delete', true, row);

  return <TableCellDeleteButton onClick={onClick} />;
};
