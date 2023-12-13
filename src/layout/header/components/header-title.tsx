import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { layoutStore } from '@store';

export const HeaderTitle: FunctionComponent = () => {
  const layout = layoutStore.useValue();

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {layout.header.title}
    </Typography>
  );
};
