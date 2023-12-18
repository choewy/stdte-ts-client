import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { ProjectCreateBody } from '@service';
import { projectHook } from '@hook';

export const ProjectPageCreateDialogAction: FunctionComponent<{
  body: ProjectCreateBody;
  onClose: () => void;
}> = ({ body, onClose }) => {
  // TODO : validate, transform(amount)
  const callback = projectHook.useCreateCallback(body);
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
