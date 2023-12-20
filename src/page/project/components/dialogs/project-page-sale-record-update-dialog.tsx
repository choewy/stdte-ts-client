import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

export const ProjectPageSaleRecordUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.sale.update.open;
  const row = dialog.projectRecord.sale.update.row;
  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'update', false, row);

  return <DialogBoxy title="매출 기록 수정" open={open} onClose={onClose} />;
};
