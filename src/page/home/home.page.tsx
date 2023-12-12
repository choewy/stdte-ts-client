import { FunctionComponent, SyntheticEvent, useCallback, useEffect } from 'react';

import { IframeConfig } from '@config';
import { LoadingEvent } from '@core';

export const HomePage: FunctionComponent = () => {
  const onLoad = useCallback((e: SyntheticEvent<HTMLIFrameElement>, error?: Error) => {
    LoadingEvent.dispatch(false, 1);

    if (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    LoadingEvent.dispatch(true);
  }, []);

  return (
    <iframe
      src={new IframeConfig().getIframeSrc()}
      onLoad={onLoad}
      onError={onLoad}
      style={{
        height: 'calc(100vh - 71px)',
        width: '100%',
      }}
    />
  );
};
