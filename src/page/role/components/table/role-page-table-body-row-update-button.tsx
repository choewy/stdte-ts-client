import { FunctionComponent } from 'react';

import { Button } from '@mui/material';

import { dialogHook } from '@hook';

export const RolePageTableBodyRowUpdateButton: FunctionComponent<{ id: number }> = ({ id }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('update', id, true);

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
