import { DialogBoxy } from '@component';
import { timeMemoHook } from '@hook';
import { timeMemoStore } from '@store';
import { FunctionComponent } from 'react';
import { TimeMemoDeleteDialogContent } from './time-memo-delete-dialog-content';
import { TimeMemoDeleteDialogAction } from './time-memo-delete-dialog-action';

export const TimeMemoDeleteDialog: FunctionComponent = () => {
  const { dialog } = timeMemoStore.useValue();

  const open = dialog.delete.open;
  const row = dialog.delete.row;

  const onCloseDelete = timeMemoHook.useDialogCallback('delete', false, row);
  const onCloseUpsert = timeMemoHook.useDialogCallback('upsert', false, row);

  return (
    <DialogBoxy
      title={'메모를 삭제하시겠습니까?'}
      open={open}
      onClose={onCloseDelete}
      contents={<TimeMemoDeleteDialogContent row={row} />}
      actions={
        <TimeMemoDeleteDialogAction
          row={row}
          onClose={() => {
            onCloseDelete();
            onCloseUpsert();
          }}
        />
      }
    />
  );
};
