import { FunctionComponent, SyntheticEvent, useCallback, useEffect } from 'react';

import { AppConfig } from '@config';
import { LoadingEvent } from '@core';
import { PagePath } from '@common';

export const HomePage: FunctionComponent = () => {
  const onLoad = useCallback((e: SyntheticEvent<HTMLIFrameElement>, error?: Error) => {
    LoadingEvent.dispatch(false, 1);

    if (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    LoadingEvent.dispatch(true);
  }, []);

  return (
    <iframe
      src={new AppConfig().getAppUrl() + PagePath.HomeIframe}
      onLoad={onLoad}
      onError={onLoad}
      style={{
        height: '100vh',
        width: '100%',
      }}
    />
  );
};
