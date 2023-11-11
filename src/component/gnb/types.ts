import { NavigateFunction } from 'react-router-dom';

import { IconButtonProps } from '@mui/material';

export type GnbIconButtonProps = Pick<IconButtonProps, 'onClick'>;
export type GnbTitleProps = { title: string };
export type GnbButtonGroupProps = {
  auth: boolean;
  navigate: NavigateFunction;
};

export type GnbProps = {
  iconButtonProps: GnbIconButtonProps;
  titleProps: GnbTitleProps;
  buttonGroupProps: GnbButtonGroupProps;
};
