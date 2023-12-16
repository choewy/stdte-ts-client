import { FunctionComponent } from 'react';

import { TableCell, TableCellProps } from '@mui/material';

import { sizeService } from '@service';

export const TableValueCell: FunctionComponent<
  Omit<TableCellProps, 'children'> & {
    value?: string | number | boolean;
    fullWidth?: boolean;
  }
> = ({ value, fullWidth, ...props }) => {
  return (
    <TableCell
      {...props}
      children={value ?? ''}
      align={props.align ?? 'center'}
      sx={sizeService.getWidthByTextLength(value ?? '', { width: fullWidth, minWidth: true }, { textWrap: 'nowrap' })}
    />
  );
};
