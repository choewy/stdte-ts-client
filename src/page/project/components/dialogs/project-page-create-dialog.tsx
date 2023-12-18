import { FunctionComponent } from 'react';

import { DialogFullScreen } from '@component';
import { dialogStore } from '@store';
import { dialogHook, projectHook } from '@hook';

import { ProjectPageCreateDialogContent } from './project-page-create-dialog-content';
import { ProjectPageCreateDialogAction } from './project-page-create-dialog-action';

export const ProjectPageCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useProjectPageCreateDialogCallback(false);

  const [body, setBody] = projectHook.useCreateState();

  return (
    <DialogFullScreen
      title="사업 등록"
      open={dialog.project.create.open}
      onClose={onClose}
      disableEscClose
      contents={<ProjectPageCreateDialogContent {...{ body, setBody }} />}
      actions={<ProjectPageCreateDialogAction {...{ body, onClose }} />}
    />
  );
};
