import { FunctionComponent, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Backdrop, CircularProgress } from '@mui/material';

import { router } from '@router';
import { BackdropStyle } from '@common';

const App: FunctionComponent = () => {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <Suspense
          fallback={
            <Backdrop open={true} sx={BackdropStyle.Suspense}>
              <CircularProgress color="inherit" />
            </Backdrop>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </HelmetProvider>
    </RecoilRoot>
  );
};

export default App;
