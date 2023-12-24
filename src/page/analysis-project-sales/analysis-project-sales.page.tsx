import { FunctionComponent } from 'react';

import { analysisHook } from '@hook';

export const AnalysisProjectSalesPage: FunctionComponent = () => {
  analysisHook.useMountProjectRecord();
  analysisHook.useUnMountProjectRecord();

  return <div></div>;
};
