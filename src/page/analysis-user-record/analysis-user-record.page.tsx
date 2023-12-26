import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { analysisHook } from '@hook';

import { AnalysisUserRecordPageToolbar } from './components';

export const AnalysisUserRecordPage: FunctionComponent = () => {
  analysisHook.useMountUserRecords();
  analysisHook.useUnMountUserRecords();

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
      <AnalysisUserRecordPageToolbar />
    </Box>
  );
};
