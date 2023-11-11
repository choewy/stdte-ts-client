import { FunctionComponent } from 'react';

import { Box, Button } from '@mui/material';

export const GnbButtonGroup: FunctionComponent = () => {
  return (
    <Box>
      <Button color="inherit">내정보</Button>
      <Button color="inherit">로그아웃</Button>
    </Box>
  );
};
