import { FunctionComponent } from 'react';

import { Outlet } from 'react-router-dom';

export const AllowGuestOnlyGuardPage: FunctionComponent = () => {
  return <Outlet />;
};
