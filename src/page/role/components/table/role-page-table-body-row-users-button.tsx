import { FunctionComponent } from 'react';

import { Link } from '@mui/material';

import { dialogHook } from '@hook';
import { RoleAdminRowResponse, sizeService } from '@service';

export const RolePageTableBodyRowUsersButton: FunctionComponent<{ row: RoleAdminRowResponse }> = ({ row }) => {
  const text = `${row.users.length}명`;

  const onClick = dialogHook.useRolePageDialogsCallback('users', row, true);

  return (
    <Link
      {...{
        children: text,
        onClick,
        sx: sizeService.getWidthByTextLength(
          text,
          { width: true, minWidth: true },
          { cursor: 'pointer', textWrap: 'nowrap' },
          56,
        ),
      }}
    />
  );
};
