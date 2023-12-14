import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { dialogHook, roleHook } from '@hook';
import { RoleAdminCreateBody } from '@service';

export const RolePageCreateDialogAction: FunctionComponent<{ body: RoleAdminCreateBody }> = ({ body }) => {
  const createRole = roleHook.useRoleCreateCallback(body);

  const onCancel = dialogHook.useRolePageCreateDialogCallback(false);
  const onCreate = useCallback(async () => {
    const ok = await createRole();

    if (ok) {
      onCancel();
    }
  }, [createRole, onCancel]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '생성', variant: 'text', onClick: onCreate }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onCancel }} />
    </Box>
  );
};
