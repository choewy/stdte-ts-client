import { FunctionComponent, SyntheticEvent, useCallback, useEffect } from 'react';

import { IframeConfig } from '@config';
import { LoadingEvent } from '@core';

export const HomePage: FunctionComponent = () => {
  const onLoad = useCallback(async (_: SyntheticEvent<HTMLIFrameElement>, error?: Error) => {
    await new Promise<void>((resolve) => {
      if (error) {
        console.error(error);
      }

      const timeout = setTimeout(() => {
        clearTimeout(timeout);

        LoadingEvent.dispatch(false);

        resolve();
      }, 1500);
    });
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
        border: 0,
      }}
    />
  );
};
