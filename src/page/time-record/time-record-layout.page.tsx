import { FunctionComponent, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const TimeRecordLayoutPage: FunctionComponent = () => {
  const param = useParams<{ id: string }>();

  useEffect(() => {
    // param.id 체크
    // param.id 유효성 체크(API call)
    // 통과 후 GET time record logs, time record projects
    // Outlet에서 GET time records
  }, [param]);

  return (
    <div>
      TIME RECORD PAGE LAYOUT
      <Outlet />
    </div>
  );
};
