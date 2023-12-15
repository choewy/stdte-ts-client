import { FunctionComponent } from 'react';

import { Button } from '@mui/material';

import { dialogHook } from '@hook';
import { RoleAdminRowResponse } from '@service';

export const RolePageTableBodyRowUpdateButton: FunctionComponent<{ row: RoleAdminRowResponse }> = ({ row }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('update', row, true);

  return (
    <Button
      {...{
        children: '수정',
        fullWidth: false,
        variant: 'text',
        color: 'info',
        size: 'small',
        onClick,
      }}
    />
  );
};
