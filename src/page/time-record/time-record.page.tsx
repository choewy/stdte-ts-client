import { FunctionComponent } from 'react';

import { timeRecordHook } from '@hook';

import { TimeRecordPageTable } from './components';

export const TimeRecordPage: FunctionComponent = () => {
  timeRecordHook.useMount();
  timeRecordHook.useUnMount();

  return <TimeRecordPageTable />;
};
