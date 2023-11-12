import { SxProps, Theme } from '@mui/material';

export class BackdropStyle {
  public static Suspense: SxProps<Theme> = {
    color: '#fff',
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };
}
