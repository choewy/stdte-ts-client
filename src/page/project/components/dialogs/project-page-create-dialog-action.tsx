import { FunctionComponent, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, Button } from '@mui/material';

import { PROJECT_CREATE_BODY, ProjectCreateBody } from '@service';
import { projectHook } from '@hook';

export const ProjectPageCreateDialogAction: FunctionComponent<{
  body: ProjectCreateBody;
  setBody: SetterOrUpdater<ProjectCreateBody>;
  onClose: () => void;
}> = ({ body, setBody, onClose }) => {
  const callback = projectHook.useCreateCallback(body);
  const onClick = useCallback(async () => {
    const ok = await callback();

    if (ok) {
      onClose();
      setBody(PROJECT_CREATE_BODY);
    }
  }, [callback, onClose, setBody]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '등록', variant: 'text', onClick }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
