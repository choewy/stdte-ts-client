import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { RoleAdminRowResponse } from '@service';
import { TableCellButton } from '@component';

export const RolePageTableBodyRowUsersButton: FunctionComponent<{ row: RoleAdminRowResponse }> = ({ row }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('users', row, true);

  return <TableCellButton text={`${row.users.length}명`} onClick={onClick} />;
};
