import { FunctionComponent, useCallback, useEffect } from 'react';

import { IFrameConfig } from '@config';
import { LoadingEvent } from '@core';

export const HomePage: FunctionComponent = () => {
  const onLoad = useCallback(() => {
    LoadingEvent.dispatch(false, 1);
  }, []);

  useEffect(() => {
    LoadingEvent.dispatch(true);
  }, []);

  return (
    <iframe
      src={new IFrameConfig().getIframeSrc()}
      onLoad={onLoad}
      style={{
        height: '100vh',
        width: '100%',
      }}
    />
  );
};
