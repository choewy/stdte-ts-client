import { FunctionComponent } from 'react';

import { DialogFullScreen } from '@component';
import { dialogStore } from '@store';
import { dialogHook, projectHook } from '@hook';

import { ProjectPageUpdateDialogContent } from './project-page-update-dialog-content';
import { ProjectPageUpdateDialogAction } from './project-page-update-dialog-action';

export const ProjectPageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.project.update.row;
  const onClose = dialogHook.useProjectPageDialogCallback('update', row, false);

  const [origin] = projectHook.useUpdateState(row);
  const [body, setBody] = projectHook.useUpdateState(row);

  return (
    <DialogFullScreen
      title="사업 정보 수정"
      open={dialog.project.update.open}
      onClose={onClose}
      disableEscClose
      contents={<ProjectPageUpdateDialogContent {...{ body, setBody }} />}
      actions={<ProjectPageUpdateDialogAction {...{ row, origin, body, setBody, onClose }} />}
    />
  );
};
