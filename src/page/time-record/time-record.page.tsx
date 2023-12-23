import { FunctionComponent } from 'react';

import { timeRecordHook } from '@hook';

import { TimeRecordPageUpsertDialog, TimeRecordPageTable } from './components';

export const TimeRecordPage: FunctionComponent = () => {
  timeRecordHook.useMount();
  timeRecordHook.useUnMount();
  timeRecordHook.useEventListeners();
  timeRecordHook.useSocketConnect();

  return (
    <>
      <TimeRecordPageUpsertDialog />
      <TimeRecordPageTable />
    </>
  );
};
