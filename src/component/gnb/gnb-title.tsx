import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { GnbStyle } from '@common';

export const GnbTitle: FunctionComponent = () => {
  const title = 'hi, there!';

  return (
    <Typography variant="h6" component="div" sx={GnbStyle.Title}>
      {title}
    </Typography>
  );
};
