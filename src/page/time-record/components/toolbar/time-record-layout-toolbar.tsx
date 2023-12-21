import { Box } from '@mui/material';
import { FunctionComponent } from 'react';
import { TimeRecordDateRangeGroup } from './time-record-date-range-group';

export const TimeRecordLayoutToolbar: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 1,
      }}
    >
      <TimeRecordDateRangeGroup />
    </Box>
  );
};
