import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { RoleRow } from '@service';
import { roleHook } from '@hook';

export const RolePageDeleteDialogAction: FunctionComponent<{ row: RoleRow; onClose: () => void }> = ({
  row,
  onClose,
}) => {
  const callback = roleHook.useDeleteCallback(row.id);
  const onClick = useCallback(async () => {
    await callback();
    onClose();
  }, [callback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '삭제', variant: 'text', onClick }} />
      <Button {...{ children: '취소', variant: 'text', autoFocus: true, onClick: onClose }} />
    </Box>
  );
};
