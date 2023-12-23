import { FunctionComponent } from 'react';

import { SxProps, TableCell, TableCellProps } from '@mui/material';

import { sizeService } from '@service';

export const TableValueCell: FunctionComponent<
  Omit<TableCellProps, 'children'> & {
    value?: string | number | boolean;
    fullWidth?: boolean;
    fixedWidth?: boolean;
    stickyRow?: number;
  }
> = ({ value, fullWidth, fixedWidth, stickyRow, ...props }) => {
  return (
    <TableCell
      {...props}
      align={props.align ?? 'center'}
      sx={(theme) => ({
        ...(theme.components?.MuiTableCell?.defaultProps?.sx ?? {}),
        ...sizeService.getWidthSxByTextLength(
          value ?? '',
          { width: fixedWidth, maxWidth: fixedWidth, minWidth: fixedWidth },
          { width: fullWidth === true ? '100%' : undefined, ...((props.sx as SxProps) ?? {}) },
        ),
      })}
      style={{
        top: typeof stickyRow === 'number' ? `${37.57 * stickyRow}px` : undefined,
      }}
    >
      {value ?? ''}
    </TableCell>
  );
};
