import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { authorizeHook } from '@hook';

export const AllowBlockOnlyGuardPage: FunctionComponent = () => {
  const passOrPath = authorizeHook.useBlockOnlyGuard();

  if (passOrPath == null) {
    return null;
  }

  if (passOrPath === true) {
    return <Outlet />;
  }

  return <Navigate to={passOrPath} replace={true} />;
};
