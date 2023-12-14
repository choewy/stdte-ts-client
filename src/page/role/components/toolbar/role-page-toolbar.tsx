import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { dialogHook } from '@hook';

export const RolePageToolbar: FunctionComponent<{ maxWidth: number }> = ({ maxWidth }) => {
  const onClick = dialogHook.useRolePageCreateDialogCallback(true);

  return (
    <Box
      sx={{
        maxWidth,
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
        mb: 1,
      }}
    >
      <ButtonGroup variant="contained">
        <Button {...{ children: '생성', onClick, size: 'small', sx: { width: 64 } }} />
      </ButtonGroup>
    </Box>
  );
};
