import { SxProps } from '@mui/material';

export class GnbStyle {
  public static get Wrapper(): SxProps {
    return { flexGrow: 1 };
  }

  public static get IconButton(): SxProps {
    return { mr: 2 };
  }

  public static get Title(): SxProps {
    return { flexGrow: 1 };
  }
}
