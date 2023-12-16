import { FunctionComponent } from 'react';

import { Link, LinkProps } from '@mui/material';

export const TableCellButton: FunctionComponent<
  Omit<LinkProps, 'children'> & {
    text: string;
  }
> = ({ text, ...props }) => {
  return (
    <Link
      {...{
        ...props,
        children: text,
        sx: { cursor: 'pointer', textWrap: 'nowrap', textAlign: 'center' },
      }}
    />
  );
};
