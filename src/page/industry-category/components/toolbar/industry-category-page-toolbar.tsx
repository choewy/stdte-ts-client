import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { dialogHook, industryCategoryHook } from '@hook';

export const IndustryCategoryPageToolbar: FunctionComponent<{
  canCreate: boolean;
}> = ({ canCreate }) => {
  const onClickCreate = dialogHook.useIndustryCategoryDialogCallback('create', true);
  const onClickDownload = industryCategoryHook.useDownloadCallback();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: 1080,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
        mb: 1,
      }}
    >
      <ButtonGroup variant="outlined">
        {canCreate && <Button {...{ children: '등록', size: 'small', onClick: onClickCreate }} />}
        <Button {...{ children: '다운로드', size: 'small', onClick: onClickDownload }} />
      </ButtonGroup>
    </Box>
  );
};
