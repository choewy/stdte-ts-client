import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { RoleRow, RoleUpdateUsersBody } from '@service';
import { buttonHook, roleHook } from '@hook';

export const RolePageUsersDialogAction: FunctionComponent<{
  row: RoleRow;
  body: RoleUpdateUsersBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByArray(
    row.users.map((user) => user.id),
    body.map((user) => user.id),
  );

  const callback = roleHook.useUpdateUsersCallback(row.id, body);
  const onClick = useCallback(async () => {
    const ok = await callback();

    if (ok) {
      onClose();
    }
  }, [callback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '저장', variant: 'text', onClick, disabled }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
