import { FunctionComponent } from 'react';

import { Button, ButtonGroup } from '@mui/material';

import { dialogHook, projectHook } from '@hook';

export const ProjectPageToolbarButtonGroup: FunctionComponent<{
  canCreate: boolean;
  canDownload: boolean;
}> = ({ canCreate, canDownload }) => {
  const onClickCreate = dialogHook.useProjectDialogCallback('create', true);
  const onClickDownload = projectHook.useDownloadCallback();

  return (
    <ButtonGroup variant="outlined">
      {canCreate && <Button {...{ children: '등록', size: 'small', onClick: onClickCreate }} />}
      {canDownload && <Button {...{ children: '다운로드', size: 'small', onClick: onClickDownload }} />}
    </ButtonGroup>
  );
};
