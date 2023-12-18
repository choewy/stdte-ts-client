import { FunctionComponent } from 'react';

import { TableCell, TableCellProps } from '@mui/material';

import { sizeService } from '@service';

export const TableValueCell: FunctionComponent<
  Omit<TableCellProps, 'children'> & {
    value?: string | number | boolean;
    fullWidth?: boolean;
    fixedWidth?: boolean;
  }
> = ({ value, fullWidth, fixedWidth, ...props }) => {
  return (
    <TableCell
      {...props}
      align={props.align ?? 'center'}
      sx={(theme) => ({
        ...(theme.components?.MuiTableCell?.defaultProps?.sx ?? {}),
        ...sizeService.getWidthByTextLength(
          value ?? '',
          { width: fixedWidth, maxWidth: fixedWidth, minWidth: true },
          { width: fullWidth === true ? '100%' : undefined },
        ),
      })}
    >
      {value ?? ''}
    </TableCell>
  );
};
