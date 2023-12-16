import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { RoleAdminRowResponse, RoleAdminUpdateBody } from '@service';
import { buttonHook, roleHook } from '@hook';

export const RolePageUpdateDialogAction: FunctionComponent<{
  row: RoleAdminRowResponse;
  body: RoleAdminUpdateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(row, body);
  const updateRole = roleHook.useRoleUpdateCallback(row.id, body);
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
