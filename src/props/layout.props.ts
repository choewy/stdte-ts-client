import { IconProps, ListItemTextProps } from '@mui/material';

export class LayoutProps {
  static icon<T extends IconProps>(props: T): T {
    return { sx: { fontSize: 18 }, ...props };
  }

  static listItemText<T extends ListItemTextProps>(props: T): T {
    return { primaryTypographyProps: { sx: { fontSize: 13 } }, ...props };
  }
}
