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
      children={value ?? ''}
      align={props.align ?? 'center'}
      sx={sizeService.getWidthByTextLength(
        value ?? '',
        { width: fixedWidth, maxWidth: fixedWidth, minWidth: true },
        { textWrap: 'nowrap', width: fullWidth === true ? '100%' : undefined },
      )}
    />
  );
};
