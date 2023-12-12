import { FunctionComponent } from 'react';
import { Helmet as HelmetAsync } from 'react-helmet-async';

import { layoutStore } from '@store';

export const Helmet: FunctionComponent = () => {
  const layout = layoutStore.useValue();

  return (
    <HelmetAsync>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <title>{layout.helmet.title}</title>
    </HelmetAsync>
  );
};
