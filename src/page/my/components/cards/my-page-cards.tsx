import { FunctionComponent } from 'react';

import { Box, SxProps } from '@mui/material';

import { layoutStore } from '@store';

import { MyPageCredentialsCard } from './my-page-credentials-card';
import { MyPagePersinalCard } from './my-page-personal-card';
import { MyPageEducationalCard } from './my-page-educational-card';
import { MyPageVehicleCard } from './my-page-vehicle-card';

const boxSx = (height: number): SxProps => ({
  my: 3,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  overflow: 'auto',
  height,
});

export const MyPageCards: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  return (
    <Box sx={boxSx(size.innerHeight - 125)}>
      <MyPageCredentialsCard />
      <MyPagePersinalCard />
      <MyPageEducationalCard />
      <MyPageVehicleCard />
    </Box>
  );
};
