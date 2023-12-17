import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { IndustryCategoryCreateBody, IndustryCategoryRowResponse } from '@service';
import { buttonHook, industryCategoryHook } from '@hook';

export const IndustryCategoryPageUpdateDialogAction: FunctionComponent<{
  row: IndustryCategoryRowResponse;
  body: IndustryCategoryCreateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(row, body);
  const updateCallback = industryCategoryHook.useUpdateCallback(row.id, body);
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
