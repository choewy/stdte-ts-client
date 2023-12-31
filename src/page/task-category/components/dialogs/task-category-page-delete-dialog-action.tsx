import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { TaskCategoryRow } from '@service';
import { taskCategoryHook } from '@hook';

export const TaskCategoryPageDeleteDialogAction: FunctionComponent<{
  row: TaskCategoryRow;
  onClose: () => void;
}> = ({ row, onClose }) => {
  const callback = taskCategoryHook.useDeleteCallback(row.id);
  const onClick = useCallback(async () => {
    const ok = await callback();

    if (ok) {
      onClose();
    }
  }, [callback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '삭제', variant: 'text', onClick }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose, autoFocus: true }} />
    </Box>
  );
};
