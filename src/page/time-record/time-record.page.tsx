import { FunctionComponent } from 'react';

import { timeMemoHook, timeRecordHook } from '@hook';

import {
  TimeMemoUpsertDialog,
  TimeMemoDeleteDialog,
  TimeRecordPageTable,
  TimeRecordPageUpsertDialog,
} from './components';

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
      <TimeMemoUpsertDialog />
      <TimeMemoDeleteDialog />
      <TimeRecordPageUpsertDialog />
      <TimeRecordPageTable />
    </>
  );
};
