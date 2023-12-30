import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';
import { userHook } from '@hook';

export const UserPageToolbar: FunctionComponent = () => {
  const onClickDownload = userHook.useDownloadCallback();

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
        <Button {...{ children: '다운로드', size: 'small', onClick: onClickDownload }} />
      </ButtonGroup>
    </Box>
  );
};
