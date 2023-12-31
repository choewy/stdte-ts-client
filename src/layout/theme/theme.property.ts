import { Components, Palette, PaletteOptions, Theme, ThemeOptions, TypographyVariantsOptions } from '@mui/material';

export class ThemeProperty implements ThemeOptions {
  palette: PaletteOptions | undefined;
  typography: TypographyVariantsOptions | ((palette: Palette) => TypographyVariantsOptions) | undefined;
  components: Components<Omit<Theme, 'components'>> | undefined;

  constructor(color: string) {
    this.palette = ['dark', 'light'].includes(color)
      ? { mode: color as 'dark' | 'light' }
      : { primary: { main: color } };

    this.typography = { fontSize: 12 };

    this.components = {
      MuiFormControl: {
        defaultProps: {
          fullWidth: true,
          margin: 'normal',
        },
      },
      MuiMenuItem: {
        defaultProps: { sx: { fontSize: '12px' } },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontSize: '12px',
            '& input': { fontSize: '12px', colorScheme: color === 'dark' ? 'dark' : 'light' },
          },
        },
        defaultProps: {
          fullWidth: true,
          margin: 'normal',
          autoComplete: 'off',
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: { fontSize: '12px' },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: { fontSize: '12px' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { fontSize: '12px' },
        },
        defaultProps: {
          fullWidth: true,
          variant: 'contained',
          size: 'large',
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
          sx: { paddingY: 2, fontSize: '12px' },
        },
      },
      MuiDialogActions: {
        defaultProps: {
          sx: { borderTop: 0.5, borderColor: 'GrayText' },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontSize: '12px',
            cursor: 'pointer',
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderCollapse: 'separate',
            borderSpacing: 0,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '& th': {
              backgroundColor: color === 'dark' ? '#303E4A' : '#f7f7f7',
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: `0.5px solid ${color === 'dark' ? 'rgba(50, 50, 50)' : 'rgba(225, 225, 225)'}`,
            fontSize: '12px',
            padding: '8px',
          },
        },
        defaultProps: {
          sx: { textWrap: 'nowrap' },
        },
      },
    };
  }
}
