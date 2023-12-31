import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { timeLayoutStore, timeMemoStore } from '@store';
import { timeMemoHook } from '@hook';
import { datetimeService } from '@service';

import { TimeMemoUpsertDialogContent } from './time-memo-upsert-dialog-content';
import { TimeMemoUpsertDialogAction } from './time-memo-upsert-dialog-action';

export const TimeMemoUpsertDialog: FunctionComponent = () => {
  const { id, editable } = timeLayoutStore.useValue();
  const { dialog } = timeMemoStore.useValue();

  const row = dialog.upsert.row;
  const open = dialog.upsert.open;
  const date = datetimeService.getDateTimeRow(row.date);

  const onClose = timeMemoHook.useDialogCallback('upsert', false, row);
  const [body, setBody] = timeMemoHook.useUpsertState(id, row);

  return (
    <DialogBoxy
      title={`${date.date}(${date.weekday})`}
      open={open}
      onClose={onClose}
      contents={
        <TimeMemoUpsertDialogContent editable={editable} updatedAt={row.updatedAt} body={body} setBody={setBody} />
      }
      actions={<TimeMemoUpsertDialogAction editable={editable} row={row} onClose={onClose} body={body} />}
    />
  );
};
