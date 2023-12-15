import { FunctionComponent } from 'react';

import { Button } from '@mui/material';

import { dialogHook } from '@hook';
import { RoleAdminRowResponse } from '@service';

export const RolePageTableBodyRowDeleteButton: FunctionComponent<{ row: RoleAdminRowResponse }> = ({ row }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('delete', row, true);

  return (
    <Button
      {...{
        children: '삭제',
        fullWidth: false,
        variant: 'text',
        color: 'error',
        size: 'small',
        onClick,
      }}
    />
  );
};
