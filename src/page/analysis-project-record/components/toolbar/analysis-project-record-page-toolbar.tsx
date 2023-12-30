import { ChangeEvent, FunctionComponent, SyntheticEvent, useCallback } from 'react';

import { Box, Button, ButtonGroup, Tab, TabProps, Tabs, TextField } from '@mui/material';

import { AnalysisProjectRecordList } from '@service';
import { analysisProjectRecordStore } from '@store';
import { analysisHook } from '@hook';

const tabProps: TabProps[] = [
  {
    value: 'customer' as keyof AnalysisProjectRecordList,
    label: '고객사별',
  },
  {
    value: 'businessCategory' as keyof AnalysisProjectRecordList,
    label: '사업구분별',
  },
  {
    value: 'industryCategory' as keyof AnalysisProjectRecordList,
    label: '산업분야별',
  },
];

export const AnalysisProjectRecordPageToolbar: FunctionComponent = () => {
  const [{ tabIndex, query }, setAnalysisProjectRecord] = analysisProjectRecordStore.useState();

  const onChange = useCallback(
    (_: SyntheticEvent<Element, Event>, tabIndex: keyof AnalysisProjectRecordList) => {
      let head: string = '';

      switch (tabIndex) {
        case 'customer':
          head = '고객사';
          break;

        case 'businessCategory':
          head = '사업구분';
          break;

        case 'industryCategory':
          head = '산업분야';
          break;
      }

      setAnalysisProjectRecord((prev) => ({ ...prev, tabIndex, head }));
    },
    [setAnalysisProjectRecord],
  );

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

      setAnalysisProjectRecord((prev) => ({ ...prev, query: { ...prev.query, s: value } }));
    },
    [query.e, setAnalysisProjectRecord],
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

      setAnalysisProjectRecord((prev) => ({ ...prev, query: { ...prev.query, e: value } }));
    },
    [query.s, setAnalysisProjectRecord],
  );

  const onClickDownload = analysisHook.useDownloadProjectRecordListCallback();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 40,
        mb: 1,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Tabs value={tabIndex} onChange={onChange}>
          {tabProps.map((props, i) => (
            <Tab key={['analysis-project-record-page-tab', props.value, i].join('-')} {...props} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flex: 1 }}>
        <TextField
          value={query.s}
          size="small"
          onChange={onChangeStartYear}
          fullWidth={false}
          inputProps={{ style: { textAlign: 'center' } }}
        />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>~</div>
        <TextField
          value={query.e}
          size="small"
          onChange={onChangeEndYear}
          fullWidth={false}
          inputProps={{ style: { textAlign: 'center' } }}
        />
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
