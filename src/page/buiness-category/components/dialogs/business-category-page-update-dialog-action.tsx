import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { BusinessCategoryCreateBody, BusinessCategoryRow } from '@service';
import { businessCategoryHook, buttonHook } from '@hook';

export const BusinessCategoryPageUpdateDialogAction: FunctionComponent<{
  row: BusinessCategoryRow;
  body: BusinessCategoryCreateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(row, body);
  const callback = businessCategoryHook.useUpdateCallback(row.id, body);
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
