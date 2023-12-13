import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { credentialsHook } from '@hook';

export const AllowGuestOnlyGuardPage: FunctionComponent = () => {
  const passOrPath = credentialsHook.useGuestOnlyGuard();

  if (passOrPath === null) {
    return null;
  }

  if (passOrPath === true) {
    return <Outlet />;
  }

  return <Navigate to={passOrPath} replace={true} />;
};
