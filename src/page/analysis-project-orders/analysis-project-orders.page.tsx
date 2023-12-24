import { FunctionComponent } from 'react';

import { analysisHook } from '@hook';

export const AnalysisProjectOrdersPage: FunctionComponent = () => {
  analysisHook.useMountProjectRecord();
  analysisHook.useUnMountProjectRecord();

  return <div></div>;
};
