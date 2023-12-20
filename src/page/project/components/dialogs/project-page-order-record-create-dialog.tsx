import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook, projectRecordHook } from '@hook';

import { ProjectPageOrderRecordForm } from '../common';

import { ProjectPageOrderRecordCreateDialogAction } from './project-page-order-record-create-dialog-action';

export const ProjectPageOrderRecordCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.order.create.open;
  const row = dialog.projectRecord.order.create.row;
  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Order, 'create', false, row);

  const [body, setBody] = projectRecordHook.useCreateState(ProjectRecordType.Order, row);

  return (
    <DialogBoxy
      title="수주 기록 등록"
      open={open}
      onClose={onClose}
      contents={<ProjectPageOrderRecordForm {...{ body, setBody }} />}
      actions={<ProjectPageOrderRecordCreateDialogAction {...{ body, setBody, onClose }} />}
    />
  );
};
