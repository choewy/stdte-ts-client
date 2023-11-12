import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

export const ForbiddenPage: FunctionComponent = () => {
  const location = useLocation();

  return <div>Forbidden Page : {location.state}</div>;
};
