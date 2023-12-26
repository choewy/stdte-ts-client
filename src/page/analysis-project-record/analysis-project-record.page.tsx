import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { analysisHook } from '@hook';

import { AnalysisProjectRecordPageToolbar, AnalysisProjectRecordPageTable } from './components';

export const AnalysisProjectRecordPage: FunctionComponent = () => {
  analysisHook.useMountProjectRecord();
  analysisHook.useUnMountProjectRecord();

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
      <AnalysisProjectRecordPageToolbar />
      <AnalysisProjectRecordPageTable />
    </Box>
  );
};
