import { Fragment, FunctionComponent } from 'react';

import { Box, Button } from '@mui/material';

import { GnbButtonGroupProps } from './types';

export const GnbButtonGroup: FunctionComponent<GnbButtonGroupProps> = ({ visible, onMyPage, onSignout }) => {
  if (visible) {
    return (
      <Box>
        <Button color="inherit" onClick={onMyPage}>
          내 정보
        </Button>
        <Button color="inherit" onClick={onSignout}>
          로그아웃
        </Button>
      </Box>
    );
  }

  return <Fragment />;
};
