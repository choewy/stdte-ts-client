import { FunctionComponent, ReactElement } from 'react';

import { Box, TableCell, TableCellProps } from '@mui/material';

export const TableComponentCell: FunctionComponent<
  Omit<TableCellProps, 'children'> & {
    components: ReactElement;
  }
> = ({ components, ...props }) => {
  return (
    <TableCell {...props}>
      <Box
        sx={{
          marginX: 1,
          padding: 0,
          gap: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {components}
      </Box>
    </TableCell>
  );
};
