import { FunctionComponent } from 'react';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';

import styled from '@emotion/styled';

import { NotisnackProps } from './types';
import { NotisnackAlert } from './notisnack-alert';

export const Notisnack: FunctionComponent<NotisnackProps> = ({ noti }) => {
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
      <NotisnackAlert noti={noti} />
    </SnackbarProvider>
  );
};
