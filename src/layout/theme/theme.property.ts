import { Components, Palette, PaletteOptions, Theme, ThemeOptions, TypographyVariantsOptions } from '@mui/material';

export class ThemeProperty implements ThemeOptions {
  palette: PaletteOptions | undefined;
  typography: TypographyVariantsOptions | ((palette: Palette) => TypographyVariantsOptions) | undefined;
  components: Components<Omit<Theme, 'components'>> | undefined;

  constructor(color: string) {
    this.palette = ['dark', 'light'].includes(color)
      ? { mode: color as 'dark' | 'light' }
      : { primary: { main: color } };

    this.typography = { fontSize: 13 };

    this.components = {
      MuiFormControl: {
        defaultProps: {
          fullWidth: true,
          margin: 'normal',
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
          InputProps: { sx: { colorScheme: color === 'dark' ? 'dark' : 'light' } },
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
          sx: { fontSize: 12 },
        },
      },
      MuiDialogTitle: {
        defaultProps: {
          sx: { borderBottom: 0.5, borderColor: 'GrayText' },
        },
      },
      MuiDialogContent: {
        defaultProps: {
          sx: { mt: 2, minWidth: 400 },
        },
      },
      MuiDialogContentText: {
        defaultProps: {
          sx: { paddingY: 2, fontSize: 13 },
        },
      },
      MuiDialogActions: {
        defaultProps: {
          sx: { borderTop: 0.5, borderColor: 'GrayText' },
        },
      },
      MuiLink: {
        defaultProps: {
          sx: { fontSize: 13, cursor: 'pointer' },
        },
      },
      MuiTable: {
        defaultProps: { sx: { borderCollapse: 'seperate', borderSpacing: 0 } },
      },

      MuiTableRow: {
        styleOverrides: {
          root: {
            '& th': {
              backgroundColor: color === 'dark' ? '#101010' : '#f7f7f7',
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: `0.5px solid ${color === 'dark' ? 'rgba(50, 50, 50)' : 'rgba(225, 225, 225)'}`,
            fontSize: '11px',
          },
        },
        defaultProps: {
          sx: { textWrap: 'nowrap' },
        },
      },
    };
  }
}
