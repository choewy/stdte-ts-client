import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { AnalysisTimeRecordToolbar } from './components';

export const AnalysisTimeRecordPage: FunctionComponent = () => {
  return (
    <Box
      sx={{
        mt: 2,
        paddingX: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AnalysisTimeRecordToolbar />
    </Box>
  );
};
