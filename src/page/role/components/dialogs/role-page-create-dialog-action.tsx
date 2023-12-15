import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { roleHook } from '@hook';
import { RoleAdminCreateBody } from '@service';

export const RolePageCreateDialogAction: FunctionComponent<{ body: RoleAdminCreateBody; onClose: () => void }> = ({
  body,
  onClose,
}) => {
  const createRole = roleHook.useRoleCreateCallback(body);
  const onCreate = useCallback(async () => {
    const ok = await createRole();

    if (ok) {
      onClose();
    }
  }, [createRole, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '생성', variant: 'text', onClick: onCreate }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
