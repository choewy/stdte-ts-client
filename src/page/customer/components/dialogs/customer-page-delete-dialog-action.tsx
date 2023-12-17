import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { CustomerRowResponse } from '@service';
import { customerHook } from '@hook';

export const CustomerPageDeleteDialogAction: FunctionComponent<{
  row: CustomerRowResponse;
  onClose: () => void;
}> = ({ row, onClose }) => {
  const deleteCallback = customerHook.useDeleteCallback(row.id);
  const onClickDelete = useCallback(async () => {
    const ok = await deleteCallback();

    if (ok) {
      onClose();
    }
  }, [deleteCallback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '삭제', variant: 'text', onClick: onClickDelete }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose, autoFocus: true }} />
    </Box>
  );
};
