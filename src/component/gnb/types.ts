import { IconButtonProps } from '@mui/material';

export type GnbIconButtonProps = Pick<IconButtonProps, 'onClick'>;
export type GnbTitleProps = { title: string };

export type GnbProps = {
  iconButtonProps: GnbIconButtonProps;
  titleProps: GnbTitleProps;
};
