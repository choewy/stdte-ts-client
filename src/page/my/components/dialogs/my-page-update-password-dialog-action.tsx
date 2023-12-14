import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { credentialsHook, dialogHook } from '@hook';
import { CredentialsUpdatePasswordBody } from '@service';

export const MyPageUpdatePasswordDialogAction: FunctionComponent<{ body: CredentialsUpdatePasswordBody }> = ({
  body,
}) => {
  const updatePassword = credentialsHook.useUpdatePasswordCallback(body);

  const onCancel = dialogHook.useMyPageUpdatePasswordDialogCallback(false);
  const onUpdate = useCallback(async () => {
    const ok = await updatePassword();

    if (ok) {
      onCancel();
    }
  }, [updatePassword, onCancel]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '변경', variant: 'text', onClick: onUpdate }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onCancel }} />
    </Box>
  );
};
