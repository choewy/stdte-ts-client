import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

export const ProjectPageSaleRecordDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.sale.delete.open;
  const row = dialog.projectRecord.sale.delete.row;
  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'delete', false, row);

  return <DialogBoxy title="매출 기록 삭제" open={open} onClose={onClose} />;
};
