import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { TaskCategoryRow, TaskCategoryUpdateBody } from '@service';
import { buttonHook, taskCategoryHook } from '@hook';

export const TaskCategoryPageUpdateDialogAction: FunctionComponent<{
  row: TaskCategoryRow;
  body: TaskCategoryUpdateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(row, body);
  const callback = taskCategoryHook.useUpdateCallback(row.id, body);
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
