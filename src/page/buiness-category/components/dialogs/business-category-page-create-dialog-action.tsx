import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { BusinessCategoryCreateBody } from '@service';
import { businessCategoryHook } from '@hook';

export const BusinessCategoryPageCreateDialogAction: FunctionComponent<{
  body: BusinessCategoryCreateBody;
  onClose: () => void;
}> = ({ body, onClose }) => {
  const callback = businessCategoryHook.useCreateCallback(body);
  const onClick = useCallback(async () => {
    const ok = await callback();

    if (ok) {
      onClose();
    }
  }, [callback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '등록', variant: 'text', onClick }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
