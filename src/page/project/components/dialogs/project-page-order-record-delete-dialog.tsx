import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

export const ProjectPageOrderRecordDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.order.delete.open;
  const row = dialog.projectRecord.order.delete.row;
  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Order, 'delete', false, row);

  return <DialogBoxy title="수주 기록 삭제" open={open} onClose={onClose} />;
};
