import { FunctionComponent } from 'react';

import { IconButton, IconButtonProps } from '@mui/material';
import { Edit } from '@mui/icons-material';

export const TableCellEditButton: FunctionComponent<Omit<IconButtonProps, 'children'>> = (props) => {
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
      <Edit sx={{ fontSize: 18 }} />
    </IconButton>
  );
};
