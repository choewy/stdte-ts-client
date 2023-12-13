import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

import { PagePath } from '@common';

export const NotFoundPage: FunctionComponent = () => {
  return <Navigate to={PagePath.Home} replace={true} />;
};
