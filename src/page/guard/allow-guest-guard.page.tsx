import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PagePath } from '@common';
import { Loading } from '@component';
import { credentialsHook } from '@hook';

export const AllowGuestOnlyGuardPage: FunctionComponent = () => {
  const pass = credentialsHook.useGuestOnlyGuard();

  if (pass === null) {
    return <Loading />;
  }

  if (pass === false) {
    return <Navigate to={PagePath.MyPage} replace={true} />;
  }

  return <Outlet />;
};
