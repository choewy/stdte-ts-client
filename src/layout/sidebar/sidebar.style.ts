import { SxProps } from '@mui/material';

export class SidebarStyle {
  static Wrapper(): SxProps {
    return { width: 250 };
  }

  static Item(depth: number): SxProps {
    return { pl: depth * 2 };
  }
}
