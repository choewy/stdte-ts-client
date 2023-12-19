import { FunctionComponent, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, Button } from '@mui/material';

import { PROJECT_UPDATE_BODY, ProjectRow, ProjectUpdateBody } from '@service';
import { buttonHook, projectHook } from '@hook';

export const ProjectPageUpdateDialogAction: FunctionComponent<{
  row: ProjectRow;
  origin: ProjectUpdateBody;
  body: ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectUpdateBody>;
  onClose: () => void;
}> = ({ row, origin, body, setBody, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(origin, body);
  const callback = projectHook.useUpdateCallback(row.id, body);
  const onClick = useCallback(async () => {
    const ok = await callback();

    if (ok) {
      onClose();
      setBody(PROJECT_UPDATE_BODY);
    }
  }, [callback, onClose, setBody]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '저장', variant: 'text', onClick, disabled }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
