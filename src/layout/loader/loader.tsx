import { FunctionComponent } from 'react';

import { Backdrop, CircularProgress, SxProps, Theme } from '@mui/material';
import { layoutStore } from '@store';
import { layoutHook } from '@hook';

const backDropSx: SxProps<Theme> = {
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 1,
};

export const Loader: FunctionComponent = () => {
  const layout = layoutStore.useValue();

  layoutHook.useLoadingListener();

  return (
    <Backdrop open={layout.loading} sx={backDropSx}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
