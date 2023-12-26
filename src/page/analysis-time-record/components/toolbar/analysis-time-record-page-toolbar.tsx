import { FunctionComponent } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';

export const AnalysisTimeRecordPageToolbar: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 40,
        mb: 1,
      }}
    >
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
        }}
      >
        <ButtonGroup variant="outlined">
          <Button {...{ children: '다운로드', size: 'small' }} />
        </ButtonGroup>
      </Box>
    </Box>
  );
};
