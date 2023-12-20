import { FunctionComponent } from 'react';

import { IconButton, IconButtonProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export const TableCellIconButton: FunctionComponent<
  Omit<IconButtonProps, 'children'> & {
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  }
> = ({ Icon, ...props }) => {
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
      <Icon sx={{ fontSize: 18 }} />
    </IconButton>
  );
};
