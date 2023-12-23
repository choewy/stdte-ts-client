import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

export const UserPageToolbar: FunctionComponent = () => {
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
        <Button {...{ children: '다운로드', size: 'small' }} />
      </ButtonGroup>
    </Box>
  );
};
