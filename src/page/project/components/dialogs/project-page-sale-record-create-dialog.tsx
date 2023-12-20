import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook, projectRecordHook } from '@hook';

import { ProjectPageSaleRecordForm } from '../common';

import { ProjectPageSaleRecordCreateDialogAction } from './project-page-sale-record-create-dialog-action';

export const ProjectPageSaleRecordCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.sale.create.open;
  const row = dialog.projectRecord.sale.create.row;
  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'create', false, row);

  const [body, setBody] = projectRecordHook.useCreateState(ProjectRecordType.Sale, row);

  return (
    <DialogBoxy
      title="매출 기록 등록"
      open={open}
      onClose={onClose}
      contents={<ProjectPageSaleRecordForm {...{ body, setBody }} />}
      actions={<ProjectPageSaleRecordCreateDialogAction {...{ body, setBody, onClose }} />}
    />
  );
};
