import { FunctionComponent } from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { router } from '@router';

import io from 'socket.io-client';

const socket = io('ws://localhost:3000/timelog', {
  transports: ['websocket'],
  withCredentials: true,
});

const App: FunctionComponent = () => {
  return (
    <RecoilRoot>
      <HelmetProvider>{/* <RouterProvider router={router} /> */}</HelmetProvider>
    </RecoilRoot>
  );
};

export default App;
