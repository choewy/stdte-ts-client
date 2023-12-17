import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { dialogHook } from '@hook';

export const ProjectPageToolbar: FunctionComponent<{
  canCreate: boolean;
}> = ({ canCreate }) => {
  const onClick = dialogHook.useProjectPageCreateDialogCallback(true);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
        mb: 1,
      }}
    >
      <ButtonGroup variant="outlined">
        {canCreate && <Button {...{ children: '등록', size: 'small', sx: { width: 64 }, onClick }} />}
        <Button {...{ children: '다운로드', size: 'small', sx: { width: 64 } }} />
      </ButtonGroup>
    </Box>
  );
};
