import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { TaskCategoryRow, TaskCategoryRowChild, TaskCategoryUpdateChildBody } from '@service';
import { buttonHook, taskCategoryHook } from '@hook';

export const TaskCategoryPageChildUpdateDialogAction: FunctionComponent<{
  parent: TaskCategoryRow;
  child: TaskCategoryRowChild;
  body: TaskCategoryUpdateChildBody;
  onClose: () => void;
}> = ({ parent, child, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(child, body);
  const callback = taskCategoryHook.useUpdateChildCallback(parent.id, child.id, body);
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
