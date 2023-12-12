import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PagePath } from '@common';
import { credentialsHook } from '@hook';

export const AllowUserOnlyGuardPage: FunctionComponent = () => {
  const pass = credentialsHook.useUserOnlyGuard();

  if (pass === null) {
    return null;
  }

  if (pass === false) {
    return <Navigate to={PagePath.SignIn} replace={true} />;
  }

  return <Outlet />;
};
