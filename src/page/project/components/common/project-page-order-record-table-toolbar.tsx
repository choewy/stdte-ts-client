import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

import { ProjectRecordType, ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageOrderRecordTableToolbar: FunctionComponent<{
  row: ProjectRow;
}> = ({ row }) => {
  const onClick = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Order, 'create', true, row);

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
        <Button
          {...{
            children: '등록',
            size: 'small',
            sx: { width: 64 },
            onClick,
          }}
        />
      </ButtonGroup>
    </Box>
  );
};
