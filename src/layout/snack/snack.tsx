import { FunctionComponent } from 'react';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';

import styled from '@emotion/styled';

import { snackHook } from '@hook';

import { Snackbar } from './components';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#A00',
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#FF7F00',
  },
}));

export const Snack: FunctionComponent = () => {
  snackHook.ussEventListener();

  return (
    <SnackbarProvider
      maxSnack={5}
      autoHideDuration={5000}
      Components={{
        success: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
    >
      <Snackbar />
    </SnackbarProvider>
  );
};
