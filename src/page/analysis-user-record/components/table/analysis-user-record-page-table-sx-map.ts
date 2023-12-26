import { SxProps } from '@mui/material';

export class AnalysisUserRecordPageTableSxMap {
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

  private widthSx(field: 'empty' | 'total' | 'user.name' | 'user.enteringDay' | 'user.resignationDay'): SxProps {
    let left: number | undefined = undefined;
    let width: number | undefined = undefined;

    switch (field) {
      case 'empty':
      case 'total':
        left = 0;
        width = 400;
        break;

      case 'user.name':
        left = 0;
        width = 100;
        break;

      case 'user.enteringDay':
        left = 100;
        width = 150;
        break;

      case 'user.resignationDay':
        left = 250;
        width = 150;
        break;
    }

    return { left, width, minWidth: width, maxWidth: width };
  }

  defaultCellSx(sx?: SxProps): SxProps {
    return { fontSize: 12, ...(sx ?? {}) };
  }

  emptyHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('empty'));
  }

  totalHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('total'));
  }

  userNameHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('user.name'));
  }

  userEnteringDayHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('user.enteringDay'));
  }

  userResignationDayHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('user.resignationDay'));
  }

  userNameBodyCellSx(): SxProps {
    return this.stickyBodyCellSx(this.widthSx('user.name'));
  }

  userEnteringDayBodyCellSx(): SxProps {
    return this.stickyBodyCellSx(this.widthSx('user.enteringDay'));
  }

  userResignationDayBodyCellSx(): SxProps {
    return this.stickyBodyCellSx(this.widthSx('user.resignationDay'));
  }
}
