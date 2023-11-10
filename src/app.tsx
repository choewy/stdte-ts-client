import { FunctionComponent } from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { router } from '@router';

export const App: FunctionComponent = () => {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </RecoilRoot>
  );
};
