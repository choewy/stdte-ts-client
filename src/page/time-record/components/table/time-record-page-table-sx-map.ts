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
      ...sx,
    };
  }

  private stickyBodyCellSx(sx: SxProps): SxProps {
    return {
      position: 'sticky',
      zIndex: 1.5,
      backgroundColor: this.backgroundColor,
      ...sx,
    };
  }

  private widthSx(
    field: 'sum' | 'project' | 'category' | 'project.name' | 'project.code' | 'category.parent' | 'category.child',
  ): SxProps {
    switch (field) {
      case 'sum':
        return { left: 0 };

      case 'project':
        return { left: 0, width: 300, minWidth: 300, maxWidth: 300 };

      case 'category':
        return { left: 300, width: 200, minWidth: 200, maxWidth: 200 };

      case 'project.name':
        return { left: 0, width: 200, minWidth: 200, maxWidth: 200 };

      case 'project.code':
        return { left: 200, width: 100, minWidth: 100, maxWidth: 100 };

      case 'category.parent':
        return { left: 300, width: 100, minWidth: 100, maxWidth: 100 };

      case 'category.child':
        return { left: 400, width: 100, minWidth: 100, maxWidth: 100 };
    }
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
