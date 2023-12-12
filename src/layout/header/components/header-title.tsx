import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { layoutStore } from '@store';

import { HeaderStyle } from '../header.style';

export const HeaderTitle: FunctionComponent = () => {
  const layout = layoutStore.useValue();

  return (
    <Typography variant="h6" component="div" sx={HeaderStyle.Title()}>
      {layout.header.title}
    </Typography>
  );
};
