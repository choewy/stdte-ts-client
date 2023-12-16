import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { UserRowResponse, UserRowUpdateBody } from '@service';
import { buttonHook, userHook } from '@hook';

export const UserPageUpdateDialogAction: FunctionComponent<{
  row: UserRowResponse;
  body: UserRowUpdateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(
    {
      ...row,
      role: row.role?.id ?? null,
    },
    body,
  );

  const updateUser = userHook.useUpdateCallback(row.id, body);
  const onClickUpdate = useCallback(async () => {
    const ok = await updateUser();

    if (ok) {
      onClose();
    }
  }, [updateUser, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '저장', variant: 'text', onClick: onClickUpdate, disabled }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
