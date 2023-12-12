import { ReactElement } from 'react';

import { DialogProps, IconButtonProps } from '@mui/material';

export type DialogBoxyProps = DialogProps & {
  contents?: ReactElement;
  actions?: ReactElement;
};

export type DialogFullScreenToolbarProps = {
  onClose: Pick<IconButtonProps, 'onClick'>['onClick'];
  title?: string;
  actions?: ReactElement;
};

export type DialogFullScreenProps = DialogProps & DialogFullScreenToolbarProps;
