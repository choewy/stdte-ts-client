import { FunctionComponent } from 'react';

import { Outlet } from 'react-router-dom';

export const AllowUserOnlyGuardPage: FunctionComponent = () => {
  return <Outlet />;
};
