import { FunctionComponent } from 'react';

import { Button } from '@mui/material';

import { dialogHook } from '@hook';

export const RolePageTableBodyRowDeleteButton: FunctionComponent<{ id: number }> = ({ id }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('delete', id, true);

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
