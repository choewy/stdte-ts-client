import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { ProjectRecordType } from '@service';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { ProjectPageOrderRecordDeleteDialogContent } from './project-page-order-record-delete-dialog-content';
import { ProjectPageOrderRecordDeleteDialogAction } from './project-page-order-record-delete-dialog-action';

export const ProjectPageOrderRecordDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const open = dialog.projectRecord.order.delete.open;
  const row = dialog.projectRecord.order.delete.row;

  const onClose = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Order, 'delete', false, row);

  return (
    <DialogBoxy
      title="수주 기록을 삭제하시갰습니까?"
      open={open}
      onClose={onClose}
      contents={<ProjectPageOrderRecordDeleteDialogContent />}
      actions={<ProjectPageOrderRecordDeleteDialogAction {...{ row, onClose }} />}
    />
  );
};
