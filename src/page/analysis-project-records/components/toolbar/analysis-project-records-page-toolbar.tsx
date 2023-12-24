import { FunctionComponent, SyntheticEvent, useCallback } from 'react';

import { Box, Button, ButtonGroup, Tab, TabProps, Tabs } from '@mui/material';

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
  const [{ tabIndex }, setAnalysisProjectRecord] = analysisProjectRecordStore.useState();

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

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        height: 40,
        mb: 1,
      }}
    >
      <Tabs value={tabIndex} onChange={onChange}>
        {tabProps.map((props, i) => (
          <Tab key={['analysis-project-record-page-tab', props.value, i].join('-')} {...props} />
        ))}
      </Tabs>
      <ButtonGroup
        variant="outlined"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Button {...{ children: '다운로드', size: 'small' }} />
      </ButtonGroup>
    </Box>
  );
};
