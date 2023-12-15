import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { RoleAdminRowResponse, RoleAdminUsersBody } from '@service';
import { buttonHook, roleHook } from '@hook';

export const RolePageUsersDialogAction: FunctionComponent<{
  row: RoleAdminRowResponse;
  body: RoleAdminUsersBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDiabledByArray(
    row.users.map((user) => user.id),
    body.map((user) => user.id),
  );

  const updateRole = roleHook.useRoleUsersUpdateCallback(row.id, body);
  const onClickUpdate = useCallback(async () => {
    const ok = await updateRole();

    if (ok) {
      onClose();
    }
  }, [updateRole, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '저장', variant: 'text', onClick: onClickUpdate, disabled }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
