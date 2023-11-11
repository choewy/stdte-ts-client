import { Fragment, FunctionComponent, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { NotisnackProps } from './types';

export const NotisnackAlert: FunctionComponent<NotisnackProps> = ({ noti }) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (noti === null) {
      return;
    }

    enqueueSnackbar({
      variant: noti.variant,
      message: noti.message,
    });
  }, [noti, enqueueSnackbar]);

  return <Fragment />;
};
