import { FunctionComponent } from 'react';

import { timeRecordHook } from '@hook';

import { TimeRecordPageUpsertDialog, TimeRecordPageTable } from './components';

export const TimeRecordPage: FunctionComponent = () => {
  timeRecordHook.useMount();
  timeRecordHook.useUnMount();

  return (
    <>
      <TimeRecordPageUpsertDialog />
      <TimeRecordPageTable />
    </>
  );
};
