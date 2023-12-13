import { FunctionComponent } from 'react';

import { Box, SxProps } from '@mui/material';

import { layoutStore } from '@store';

import { MyPageCredentialsCard } from './my-page-credentials-card';
import { MyPagePersinalCard } from './my-page-personal-card';
import { MyPageEducationalCard } from './my-page-educational-card';
import { MyPageVehicleCard } from './my-page-vehicle-card';

const boxSx = (width: number, height: number): SxProps => ({
  my: 1,
  p: 2,
  display: 'flex',
  flexDirection: width < 800 ? 'column' : 'row',
  height: width < 800 ? '100%' : height,
  overflow: 'scroll',
});

export const MyPageCards: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  return (
    <Box sx={boxSx(size.innerWidth, size.innerHeight - 125)}>
      <MyPageCredentialsCard />
      <MyPagePersinalCard />
      <MyPageEducationalCard />
      <MyPageVehicleCard />
    </Box>
  );
};
