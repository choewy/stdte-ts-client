import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

import { PagePath } from '@common';

const RedirectPage: FunctionComponent = () => {
  return <Navigate to={PagePath.Home} replace />;
};

export default RedirectPage;
