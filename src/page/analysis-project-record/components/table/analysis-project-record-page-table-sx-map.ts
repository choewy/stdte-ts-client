import { SxProps } from '@mui/material';

export class AnalysisProjectRecordPageTableSxMap {
  private readonly backgroundColor?: string;

  constructor(theme?: string) {
    if (theme) {
      this.backgroundColor = theme === 'dark' ? '#222' : '#fff';
    }
  }

  private stickyHeadCellSx(sx: SxProps): SxProps {
    return {
      position: 'sticky',
      zIndex: 3,
      fontSize: 12,
      ...sx,
    };
  }

  private stickyBodyCellSx(sx: SxProps): SxProps {
    return {
      position: 'sticky',
      zIndex: 1.5,
      backgroundColor: this.backgroundColor,
      fontSize: 12,
      ...sx,
    };
  }

  private widthSx(field: 'name' | 'total'): SxProps {
    let left: number | undefined = undefined;
    let width: number | undefined = undefined;

    switch (field) {
      case 'name':
      case 'total':
        left = 0;
        width = 400;
        break;
    }

    return { left, width, minWidth: width, maxWidth: width };
  }

  defaultCellSx(sx?: SxProps): SxProps {
    return { fontSize: 12, ...(sx ?? {}) };
  }

  nameHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('name'));
  }

  totalHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('total'));
  }

  nameBodyCellSx(): SxProps {
    return this.stickyBodyCellSx(this.widthSx('name'));
  }
}
