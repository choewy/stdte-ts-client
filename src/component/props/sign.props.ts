import { ButtonProps, FormControlProps, PaperProps, TextFieldProps } from '@mui/material';

import { GlobalProps } from './global.props';

export class SignProps {
  static textField<T extends TextFieldProps>(props: T): T {
    return GlobalProps.textField({ required: true, fullWidth: true, ...props });
  }

  static paper<T extends PaperProps>(props: T): T {
    return {
      component: 'form',
      elevation: 3,
      sx: { p: 5, boxSizing: 'border-box', width: 400 },
      ...props,
    };
  }

  static button<T extends ButtonProps>(props: T): T {
    return GlobalProps.button({ type: 'submit', fullWidth: true, ...props });
  }

  static formControl<T extends FormControlProps>(props: T): T {
    return GlobalProps.formControl({ fullWidth: true, ...props });
  }
}
