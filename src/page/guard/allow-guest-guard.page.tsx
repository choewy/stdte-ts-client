import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { authorizeHook } from '@hook';

export const AllowGuestOnlyGuardPage: FunctionComponent = () => {
  const passOrPath = authorizeHook.useGuestOnlyGuard();

  if (passOrPath === null) {
    return null;
  }

  if (passOrPath === true) {
    return <Outlet />;
  }

  return <Navigate to={passOrPath} replace={true} />;
};
