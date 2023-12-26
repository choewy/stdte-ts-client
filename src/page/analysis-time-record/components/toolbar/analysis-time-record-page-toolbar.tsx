import { ChangeEvent, FunctionComponent, useCallback } from 'react';

import { Box, Button, ButtonGroup, TextField } from '@mui/material';

import { analysisTimeRecordStore } from '@store';
import { analysisHook } from '@hook';

export const AnalysisTimeRecordPageToolbar: FunctionComponent = () => {
  const [{ query }, setAnalysisTimeReceord] = analysisTimeRecordStore.useState();

  const onChangeStartYear = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      const year = Number(value);

      if (Number.isNaN(year)) {
        return;
      }

      if (year > 9999) {
        return;
      }

      if (value.length === 4 && query.e.length === 4 && year > Number(query.e)) {
        value = query.e;
      }

      setAnalysisTimeReceord((prev) => ({ ...prev, query: { ...prev.query, s: value } }));
    },
    [query.e, setAnalysisTimeReceord],
  );

  const onChangeEndYear = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      const year = Number(value);

      if (Number.isNaN(year)) {
        return;
      }

      if (year > 9999) {
        return;
      }

      if (value.length === 4 && query.s.length === 4 && year < Number(query.s)) {
        value = query.s;
      }

      setAnalysisTimeReceord((prev) => ({ ...prev, query: { ...prev.query, e: value } }));
    },
    [query.s, setAnalysisTimeReceord],
  );

  const onClickDownload = analysisHook.useDownloadTimeRecordListCallback();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 40,
        mb: 1,
      }}
    >
      <Box sx={{ flex: 1 }}></Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flex: 1 }}>
        <TextField value={query.s} size="small" onChange={onChangeStartYear} fullWidth={false} />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>~</div>
        <TextField value={query.e} size="small" onChange={onChangeEndYear} fullWidth={false} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
        }}
      >
        <ButtonGroup variant="outlined">
          <Button {...{ children: '다운로드', size: 'small', onClick: onClickDownload }} />
        </ButtonGroup>
      </Box>
    </Box>
  );
};
