import { FunctionComponent } from 'react';

import { IconButton, IconButtonProps } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const TableCellDeleteButton: FunctionComponent<Omit<IconButtonProps, 'children'>> = (props) => {
  return (
    <IconButton
      {...{
        ...props,
        size: 'small',
        sx: {
          cursor: 'pointer',
          textWrap: 'nowrap',
          textAlign: 'center',
        },
      }}
    >
      <Delete sx={{ fontSize: 18 }} />
    </IconButton>
  );
};
