import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PagePath } from '@common';
import { credentialsHook } from '@hook';

export const AllowGuestOnlyGuardPage: FunctionComponent = () => {
  const pass = credentialsHook.useGuestOnlyGuard();

  if (pass === null) {
    return null;
  }

  if (pass === false) {
    return <Navigate to={PagePath.MyPage} replace={true} />;
  }

  return <Outlet />;
};
