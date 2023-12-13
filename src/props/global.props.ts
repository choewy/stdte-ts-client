import { ButtonProps, FormControlProps, TextFieldProps } from '@mui/material';

export class GlobalProps {
  static textField<T extends TextFieldProps>(props: T): T {
    return {
      margin: 'normal',
      inputProps: { style: { fontSize: 13 } },
      InputLabelProps: { style: { fontSize: 13 } },
      autoComplete: 'off',
      ...props,
    };
  }

  static button<T extends ButtonProps>(props: T): T {
    return {
      variant: 'contained',
      size: 'large',
      sx: { fontSize: 13 },
      ...props,
    };
  }

  static formControl<T extends FormControlProps>(props: T): T {
    return { margin: 'normal', ...props };
  }
}
