import { FunctionComponent } from 'react';

import { DialogFullScreen } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { ProjectPageRecordDialogContent } from './project-page-record-dialog-content';

export const ProjectPageRecordDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.project.record.row;
  const onClose = dialogHook.useProjectPageDialogCallback('record', row, false);

  return (
    <DialogFullScreen
      title="사업 수주/매출 기록"
      open={dialog.project.record.open}
      onClose={onClose}
      contents={<ProjectPageRecordDialogContent />}
      actions={<></>}
    />
  );
};
