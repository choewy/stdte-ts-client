import { FunctionComponent, useCallback, useState } from 'react';

import { Loading } from '@component';
import { IFrameConfig } from '@config';

export const HomePage: FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const onLoad = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [setLoading]);

  return (
    <>
      {loading ? <Loading /> : null}
      <iframe
        src={new IFrameConfig().getIframeSrc()}
        onLoad={onLoad}
        style={{
          height: '100vh',
          width: '100%',
        }}
      />
    </>
  );
};
