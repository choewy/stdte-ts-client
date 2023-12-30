import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup, Typography } from '@mui/material';

import { ProjectRecordType, ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageSaleRecordTableToolbar: FunctionComponent<{
  row: ProjectRow;
}> = ({ row }) => {
  const onClick = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'create', true, row);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 40,
        mb: 1,
      }}
    >
      <Box />
      <Typography component="h3" sx={{ fontWeight: 600 }}>
        매출
      </Typography>
      <ButtonGroup variant="outlined">
        <Button {...{ children: '등록', size: 'small', onClick }} />
      </ButtonGroup>
    </Box>
  );
};
