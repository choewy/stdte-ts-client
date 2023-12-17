import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { CustomerCreateBody } from '@service';
import { customerHook } from '@hook';

export const CustomerPageCreateDialogAction: FunctionComponent<{
  body: CustomerCreateBody;
  onClose: () => void;
}> = ({ body, onClose }) => {
  const createCallback = customerHook.useCreateCallback(body);
  const onClickCreate = useCallback(async () => {
    const ok = await createCallback();

    if (ok) {
      onClose();
    }
  }, [createCallback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '등록', variant: 'text', onClick: onClickCreate }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
