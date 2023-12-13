import { ButtonProps, FormControlProps, PaperProps, TextFieldProps, TypographyProps } from '@mui/material';

import { GlobalProps } from './global.props';

export class MyProps {
  static textField<T extends TextFieldProps>(props: T): T {
    return GlobalProps.textField({
      margin: 'dense',
      fullWidth: true,
      ...props,
    });
  }

  static button<T extends ButtonProps>(props: T): T {
    return GlobalProps.button({
      fullWidth: true,
      ...props,
    });
  }

  static formControl<T extends FormControlProps>(props: T): T {
    return { fullWidth: true, margin: 'normal', ...props };
  }

  static typography<T extends TypographyProps>(props: T): T {
    return { textAlign: 'center', variant: 'h6', sx: { my: 1 }, ...props };
  }

  static paper<T extends PaperProps>(props: T): T {
    return {
      elevation: 3,
      noValidate: true,
      sx: {
        p: 2,
        m: 1,
        flex: 1,
        overflow: 'scroll',
        minWidth: 340,
      },
      ...props,
    };
  }
}
