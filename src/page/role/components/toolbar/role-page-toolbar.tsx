import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { dialogHook } from '@hook';

export const RolePageToolbar: FunctionComponent = () => {
  const onClick = dialogHook.useRoleDialogsCallback('create', true);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: 600,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
        mb: 1,
      }}
    >
      <ButtonGroup variant="outlined">
        <Button {...{ children: '생성', onClick, size: 'small' }} />
        {/* <Button {...{ children: '다운로드', size: 'small' }} /> */}
      </ButtonGroup>
    </Box>
  );
};
