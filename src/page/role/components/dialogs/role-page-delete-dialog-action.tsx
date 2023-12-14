import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { dialogHook, roleHook } from '@hook';

export const RolePageDeleteDialogAction: FunctionComponent<{ id: number }> = ({ id }) => {
  const deleteRole = roleHook.useDeleteRoleCallback(id);

  const onClickCancel = dialogHook.useRolePageDialogsCallback('delete', id, false);
  const onClickDelete = useCallback(async () => {
    await deleteRole();
    onClickCancel();
  }, [deleteRole, onClickCancel]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '삭제', variant: 'text', onClick: onClickDelete }} />
      <Button {...{ children: '취소', variant: 'text', autoFocus: true, onClick: onClickCancel }} />
    </Box>
  );
};
