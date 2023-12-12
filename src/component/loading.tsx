import { Backdrop, CircularProgress, SxProps, Theme } from '@mui/material';
import { FunctionComponent } from 'react';

export const backDropSx: SxProps<Theme> = {
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 1,
};

export const Loading: FunctionComponent = () => {
  return (
    <Backdrop open={true} sx={backDropSx}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
