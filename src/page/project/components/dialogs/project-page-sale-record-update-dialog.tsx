import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook, projectRecordHook } from '@hook';

import { ProjectPageSaleRecordForm } from '../common';

import { ProjectPageSaleRecordUpdateDialogAction } from './project-page-sale-record-update-dialog-action';

export const ProjectPageSaleRecordUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.sale.update.open;
  const row = dialog.projectRecord.sale.update.row;
  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'update', false, row);

  const [body, setBody] = projectRecordHook.useUpdateState(row);

  return (
    <DialogBoxy
      title="매출 기록 수정"
      open={open}
      onClose={onClose}
      contents={<ProjectPageSaleRecordForm {...{ body, setBody }} />}
      actions={<ProjectPageSaleRecordUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
