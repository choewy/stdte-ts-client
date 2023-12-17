import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { authorizeHook } from '@hook';

export const AllowUserOnlyGuardPage: FunctionComponent = () => {
  const passOrPasth = authorizeHook.useUserOnlyGuard();

  if (passOrPasth === null) {
    return null;
  }

  if (passOrPasth === true) {
    return <Outlet />;
  }

  return <Navigate to={passOrPasth} replace={true} />;
};
