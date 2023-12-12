import { FunctionComponent, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';

import { snackHook } from '@hook';

export const Snackbar: FunctionComponent = () => {
  const snack = snackHook.useDequeue();

  useEffect(() => {
    if (snack == null) {
      return;
    }

    enqueueSnackbar({
      variant: snack.variant,
      message: snack.message,
    });
  }, [snack, enqueueSnackbar]);

  return null;
};
