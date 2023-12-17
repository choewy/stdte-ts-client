import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { CustomerRow, CustomerUpdateBody } from '@service';
import { buttonHook, customerHook } from '@hook';

export const CustomerPageUpdateDialogAction: FunctionComponent<{
  row: CustomerRow;
  body: CustomerUpdateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(row, body);
  const callback = customerHook.useUpdateCallback(row.id, body);
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
