import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { credentialsHook } from '@hook';

export const AllowUserOnlyGuardPage: FunctionComponent = () => {
  const passOrPasth = credentialsHook.useUserOnlyGuard();

  if (passOrPasth === null) {
    return null;
  }

  if (passOrPasth === true) {
    return <Outlet />;
  }

  return <Navigate to={passOrPasth} replace={true} />;
};
