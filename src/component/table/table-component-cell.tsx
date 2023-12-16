import { FunctionComponent, ReactNode } from 'react';

import { Box, TableCell, TableCellProps } from '@mui/material';

export const TableComponentCell: FunctionComponent<
  Omit<TableCellProps, 'children'> & {
    components: ReactNode[];
  }
> = ({ components, ...props }) => {
  return (
    <TableCell
      {...props}
      children={
        <Box
          sx={{
            gap: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {components.map((component) => component)}
        </Box>
      }
    />
  );
};
