import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { dialogHook } from '@hook';

export const BusinessCategoryPageToolbar: FunctionComponent<{
  canCreate: boolean;
}> = ({ canCreate }) => {
  const onClickCreate = dialogHook.useBusinessCategoryPageCreateDialogCallback(true);

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
        {canCreate && <Button {...{ children: '생성', size: 'small', sx: { width: 64 }, onClick: onClickCreate }} />}
        <Button {...{ children: '다운로드', size: 'small', sx: { width: 64 } }} />
      </ButtonGroup>
    </Box>
  );
};
