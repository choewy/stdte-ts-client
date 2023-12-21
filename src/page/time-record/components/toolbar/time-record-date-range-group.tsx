import { ChangeEvent, FunctionComponent, useCallback } from 'react';

import { Box } from '@mui/material';

import { DateInput } from '@component';
import { timeRecordLayoutStore } from '@store';

export const TimeRecordDateRangeGroup: FunctionComponent = () => {
  const [{ date }, setTimeRecordLayout] = timeRecordLayoutStore.useState();

  const onChangeStartDate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setTimeRecordLayout((prev) => ({ ...prev, date: { ...prev.date, s: e.target.value } })),
    [setTimeRecordLayout],
  );

  const onChangeEndDate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setTimeRecordLayout((prev) => ({ ...prev, date: { ...prev.date, e: e.target.value } })),
    [setTimeRecordLayout],
  );

  return (
    <Box sx={{ display: 'flex', maxWidth: 400, alignItems: 'center', gap: 2 }}>
      <DateInput value={date.s} size="small" max={date.e} onChange={onChangeStartDate} />
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>~</div>
      <DateInput value={date.e} size="small" min={date.s} onChange={onChangeEndDate} />
    </Box>
  );
};
