import { FunctionComponent } from 'react';

import { timeMemoHook, timeRecordHook } from '@hook';

import { TimeRecordPageUpsertDialog, TimeRecordPageTable } from './components';

export const TimeRecordPage: FunctionComponent = () => {
  timeRecordHook.useMount();
  timeRecordHook.useUnMount();
  timeRecordHook.useEventListeners();
  timeRecordHook.useSocketConnect();
  timeMemoHook.useMount();
  timeMemoHook.useUnMount();
  timeMemoHook.useEventListeners();
  timeMemoHook.useSocketConnect();

  return (
    <>
      <TimeRecordPageUpsertDialog />
      <TimeRecordPageTable />
    </>
  );
};
