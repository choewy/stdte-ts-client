import { SxProps } from '@mui/material';

export class GridTableStyle {
  public static Conatiner: SxProps = {
    marginTop: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
  };

  public static Wrapper: SxProps = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  public static ToolbarMenuItemsWrapper: SxProps = {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
  };

  public static ToolbarButtonsWrapper: SxProps = {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  };
}
