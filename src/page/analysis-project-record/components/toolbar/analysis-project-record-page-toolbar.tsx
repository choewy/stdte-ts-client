import { ChangeEvent, FunctionComponent, SyntheticEvent, useCallback } from 'react';

import { Box, Button, ButtonGroup, Tab, TabProps, Tabs, TextField } from '@mui/material';

import { AnalysisProjectRecordList } from '@service';
import { analysisProjectRecordStore } from '@store';

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

      setAnalysisProjectRecord((prev) => ({ ...prev, query: { ...prev.query, s: value } }));
    },
    [setAnalysisProjectRecord],
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

      setAnalysisProjectRecord((prev) => ({ ...prev, query: { ...prev.query, e: value } }));
    },
    [setAnalysisProjectRecord],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 40,
        mb: 1,
      }}
    >
      <Box>
        <Tabs value={tabIndex} onChange={onChange}>
          {tabProps.map((props, i) => (
            <Tab key={['analysis-project-record-page-tab', props.value, i].join('-')} {...props} />
          ))}
        </Tabs>
      </Box>
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
        }}
      >
        <ButtonGroup variant="outlined">
          <Button {...{ children: '다운로드', size: 'small' }} />
        </ButtonGroup>
      </Box>
    </Box>
  );
};
