import { FunctionComponent, useEffect } from 'react';

import { IframeConfig } from '@config';

export const HomeIframePage: FunctionComponent = () => {
  useEffect(() => {
    window.location.replace(new IframeConfig().getIframeSrc());
  }, []);

  return null;
};
