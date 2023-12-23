import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore, timeRecordStore } from '@store';
import { dialogHook, timeRecordHook } from '@hook';

import { TimeRecordPageUpsertDialogContent } from './time-record-page-upsert-dialog-content';
import { TimeRecordPageUpsertDialogAction } from './time-record-page-upsert-dialog-action';

export const TimeRecordPageUpsertDialog: FunctionComponent = () => {
  const { open, row, project, child, date } = dialogStore.useValue().timeRecord.upsert;
  const onClose = dialogHook.useTimeRecordDialog('upsert', false, undefined, project, child, date);

  const { id } = timeRecordStore.useValue();
  const [origin] = timeRecordHook.useUpsertState(id, row);
  const [body, setBody] = timeRecordHook.useUpsertState(id, row);

  return (
    <DialogBoxy
      title={[`${date.date}(${date.weekday})`, project.code, project.category.name, child.name].join(' - ')}
      open={open}
      onClose={onClose}
      contents={<TimeRecordPageUpsertDialogContent {...{ row, project, body, setBody }} />}
      actions={<TimeRecordPageUpsertDialogAction {...{ origin, body, onClose }} />}
    />
  );
};
