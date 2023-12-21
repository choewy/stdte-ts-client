import { FunctionComponent } from 'react';

import { TableCell, TableCellProps } from '@mui/material';

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
          { width: fixedWidth, maxWidth: fixedWidth, minWidth: true },
          { width: fullWidth === true ? '100%' : undefined },
        ),
      })}
      style={{
        top: typeof stickyRow === 'number' ? `${55.28 * stickyRow}px` : undefined,
      }}
    >
      {value ?? ''}
    </TableCell>
  );
};
