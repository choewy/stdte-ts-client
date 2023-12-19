import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

export const ProjectPageOrderRecordTableToolbar: FunctionComponent = () => {
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
            onClick: () => {},
          }}
        />
      </ButtonGroup>
    </Box>
  );
};
