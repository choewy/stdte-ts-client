import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { roleHook } from '@hook';
import { RoleCreateBody } from '@service';

export const RolePageCreateDialogAction: FunctionComponent<{ body: RoleCreateBody; onClose: () => void }> = ({
  body,
  onClose,
}) => {
  const callback = roleHook.useCreateCallback(body);
  const onCreate = useCallback(async () => {
    const ok = await callback();

    if (ok) {
      onClose();
    }
  }, [callback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '생성', variant: 'text', onClick: onCreate }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
