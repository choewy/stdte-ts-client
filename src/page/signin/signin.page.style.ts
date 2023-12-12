import { SxProps } from '@mui/material';

export class SignInPageStyle {
  static Container(): SxProps {
    return {
      mt: 10,
    };
  }

  static Wrapper(): SxProps {
    return {
      marginTop: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
  }

  static Button(): SxProps {
    return { mt: 3, mb: 2 };
  }
}
