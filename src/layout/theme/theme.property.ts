import { Components, PaletteOptions, Theme, ThemeOptions } from '@mui/material';

export class ThemeProperty implements ThemeOptions {
  palette?: PaletteOptions | undefined;
  components?: Components<Omit<Theme, 'components'>> | undefined;

  constructor(color: string) {
    this.palette = ['dark', 'light'].includes(color)
      ? { mode: color as 'dark' | 'light' }
      : { primary: { main: color } };

    this.components = {
      MuiFormControl: {
        defaultProps: {
          fullWidth: true,
          margin: 'normal',
          sx: { fontSize: 13 },
        },
      },
      MuiMenuItem: {
        defaultProps: { sx: { fontSize: 13 } },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          margin: 'normal',
          autoComplete: 'off',
          InputProps: { sx: { fontSize: 13, colorScheme: color === 'dark' ? 'dark' : 'light' } },
          inputProps: { style: { fontSize: 13, colorScheme: color === 'dark' ? 'dark' : 'light' } },
          InputLabelProps: { style: { fontSize: 13 } },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          sx: { fontSize: 13 },
        },
      },
      MuiSelect: {
        defaultProps: {
          sx: { fontSize: 13 },
        },
      },
      MuiButton: {
        defaultProps: {
          fullWidth: true,
          variant: 'contained',
          size: 'large',
          sx: { fontSize: 13 },
        },
      },
    };
  }
}
