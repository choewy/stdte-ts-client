import { FunctionComponent } from 'react';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';

import styled from '@emotion/styled';

import { snackHook } from '@hook';

import { Snackbar } from './components';

export const Snack: FunctionComponent = () => {
  snackHook.ussEventListener();

  return (
    <SnackbarProvider
      maxSnack={5}
      autoHideDuration={3000}
      Components={{
        info: styled(MaterialDesignContent)(() => ({
          '&.notistack-MuiContent-info': {
            backgroundColor: '#A00',
          },
        })),
      }}
    >
      <Snackbar />
    </SnackbarProvider>
  );
};
