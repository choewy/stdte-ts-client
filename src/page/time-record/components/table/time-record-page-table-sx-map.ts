import { SxProps } from '@mui/material';

export class TimeRecordPageTableSxMap {
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

  private widthSx(
    field: 'sum' | 'project' | 'category' | 'project.name' | 'project.code' | 'category.parent' | 'category.child',
  ): SxProps {
    let left: number | undefined = undefined;
    let width: number | undefined = undefined;

    switch (field) {
      case 'sum':
        left = 0;
        break;

      case 'project':
        left = 0;
        width = 325;
        break;

      case 'category':
        left = 325;
        width = 250;
        break;

      case 'project.name':
        left = 0;
        width = 200;
        break;

      case 'project.code':
        left = 200;
        width = 125;
        break;

      case 'category.parent':
        left = 325;
        width = 125;
        break;

      case 'category.child':
        left = 450;
        width = 125;
        break;
    }

    return { left, width, minWidth: width, maxWidth: width };
  }

  defaultCellSx(sx?: SxProps): SxProps {
    return { fontSize: 12, ...(sx ?? {}) };
  }

  sumHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('sum'));
  }

  projectHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('project'));
  }

  categoryHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('category'));
  }

  projectNameHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('project.name'));
  }

  projectCodeHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('project.code'));
  }

  categoryParentHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('category.parent'));
  }

  categoryChildHeadCellSx(): SxProps {
    return this.stickyHeadCellSx(this.widthSx('category.child'));
  }

  projectNameBodyCellSx(): SxProps {
    return this.stickyBodyCellSx({
      ...this.widthSx('project.name'),
      textWrap: 'wrap',
    });
  }

  projectCodeBodyCellSx(): SxProps {
    return this.stickyBodyCellSx(this.widthSx('project.code'));
  }

  categoryParentBodyCellSx(): SxProps {
    return this.stickyBodyCellSx(this.widthSx('category.parent'));
  }

  categoryChildBodyCellSx(): SxProps {
    return this.stickyBodyCellSx(this.widthSx('category.child'));
  }
}
