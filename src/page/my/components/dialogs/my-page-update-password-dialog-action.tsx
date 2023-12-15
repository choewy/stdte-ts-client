import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { credentialsHook } from '@hook';
import { CredentialsUpdatePasswordBody } from '@service';

export const MyPageUpdatePasswordDialogAction: FunctionComponent<{
  body: CredentialsUpdatePasswordBody;
  onClose: () => void;
}> = ({ body, onClose }) => {
  const updatePassword = credentialsHook.useUpdatePasswordCallback(body);

  const onUpdate = useCallback(async () => {
    const ok = await updatePassword();

    if (ok) {
      onClose();
    }
  }, [updatePassword, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '변경', variant: 'text', onClick: onUpdate }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
