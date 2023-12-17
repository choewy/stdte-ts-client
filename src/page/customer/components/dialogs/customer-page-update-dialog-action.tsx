import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { CustomerRowResponse, CustomerUpdateBody } from '@service';
import { buttonHook, customerHook } from '@hook';

export const CustomerPageUpdateDialogAction: FunctionComponent<{
  row: CustomerRowResponse;
  body: CustomerUpdateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(row, body);
  const updateCallback = customerHook.useUpdateCallback(row.id, body);
  const onClickUpdate = useCallback(async () => {
    const ok = await updateCallback();

    if (ok) {
      onClose();
    }
  }, [updateCallback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '저장', variant: 'text', onClick: onClickUpdate, disabled }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
