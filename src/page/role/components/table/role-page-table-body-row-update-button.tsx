import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { RoleRow } from '@service';
import { TableCellEditButton } from '@component';

export const RolePageTableBodyRowUpdateButton: FunctionComponent<{ row: RoleRow }> = ({ row }) => {
  const onClick = dialogHook.useRoleDialogsCallback('update', true, row);

  return <TableCellEditButton onClick={onClick} />;
};
