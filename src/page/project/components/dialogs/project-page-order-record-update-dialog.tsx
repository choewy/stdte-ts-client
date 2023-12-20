import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook, projectRecordHook } from '@hook';

import { ProjectPageOrderRecordForm } from '../common';

import { ProjectPageOrderRecordUpdateDialogAction } from './project-page-order-record-update-dialog-action';

export const ProjectPageOrderRecordUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.order.update.open;
  const row = dialog.projectRecord.order.update.row;
  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Order, 'update', false, row);

  const [body, setBody] = projectRecordHook.useUpdateState(row);

  return (
    <DialogBoxy
      title="수주 기록 수정"
      open={open}
      onClose={onClose}
      contents={<ProjectPageOrderRecordForm {...{ body, setBody }} />}
      actions={<ProjectPageOrderRecordUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
