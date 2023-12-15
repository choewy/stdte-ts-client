import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { roleHook } from '@hook';

export const RolePageDeleteDialogAction: FunctionComponent<{ id: number; onClose: () => void }> = ({ id, onClose }) => {
  const deleteRole = roleHook.useDeleteRoleCallback(id);

  const onClickDelete = useCallback(async () => {
    await deleteRole();
    onClose();
  }, [deleteRole, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '삭제', variant: 'text', onClick: onClickDelete }} />
      <Button {...{ children: '취소', variant: 'text', autoFocus: true, onClick: onClose }} />
    </Box>
  );
};
