import { SxProps } from '@mui/material';

export class BoxStyle {
  static MyPagePaper(height: number): SxProps {
    return {
      m: 5,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      overflow: 'auto',
      height,
    };
  }
}
