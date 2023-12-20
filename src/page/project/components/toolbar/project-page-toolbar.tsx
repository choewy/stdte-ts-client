import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { dialogHook, projectHook } from '@hook';

export const ProjectPageToolbar: FunctionComponent<{
  canCreate: boolean;
}> = ({ canCreate }) => {
  const onClickCreate = dialogHook.useProjectDialogCallback('create', true);
  const onClickDownload = projectHook.useDownloadCallback();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
        mb: 1,
      }}
    >
      <ButtonGroup variant="outlined">
        {canCreate && (
          <Button
            {...{
              children: '등록',
              size: 'small',
              sx: { width: 64 },
              onClick: onClickCreate,
            }}
          />
        )}
        <Button
          {...{
            children: '다운로드',
            size: 'small',
            sx: { width: 64 },
            onClick: onClickDownload,
          }}
        />
      </ButtonGroup>
    </Box>
  );
};
