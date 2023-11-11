import { ButtonProps, IconButtonProps } from '@mui/material';

export type GnbIconButtonProps = Pick<IconButtonProps, 'onClick'>;
export type GnbTitleProps = { title: string };
export type GnbButtonGroupProps = {
  visible: boolean;
  onMyPage: Pick<ButtonProps, 'onClick'>['onClick'];
  onSignout: Pick<ButtonProps, 'onClick'>['onClick'];
};

export type GnbProps = {
  iconButtonProps: GnbIconButtonProps;
  titleProps: GnbTitleProps;
  buttonGroupProps: GnbButtonGroupProps;
};
