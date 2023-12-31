import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { dialogHook } from '@hook';
import { TaskCategoryRow } from '@service';

export const TaskCategoryPageChildrenDialogContentToolbar: FunctionComponent<{
  parent: TaskCategoryRow;
  canCreate: boolean;
}> = ({ parent, canCreate }) => {
  const onClick = dialogHook.useTaskCategoryChildDialogCallback('create', parent, true);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: 1080,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
        mb: 1,
      }}
    >
      <ButtonGroup variant="outlined">
        {canCreate && <Button {...{ children: '등록', size: 'small', onClick }} />}
      </ButtonGroup>
    </Box>
  );
};
