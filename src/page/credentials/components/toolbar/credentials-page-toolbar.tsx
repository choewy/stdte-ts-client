import { FunctionComponent, SyntheticEvent, useCallback } from 'react';

import { Box, Button, ButtonGroup, Tab, Tabs } from '@mui/material';

import { CredentialsStatus } from '@common';
import { credentialsStore } from '@store';
import { CREDENTIALS_LIST_QUERY } from '@service';
import { tabHook } from '@hook';

export const CredentialsPageTabs: FunctionComponent = () => {
  const [{ stats, query }, setCredentials] = credentialsStore.useState();

  const tabProps = tabHook.useCredentialsTabProps(stats);
  const onChange = useCallback(
    (_: SyntheticEvent<Element, Event>, status: CredentialsStatus) => {
      setCredentials((prev) => ({ ...prev, load: true, query: { ...CREDENTIALS_LIST_QUERY, status } }));
    },
    [setCredentials],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        width: 600,
        justifyContent: 'space-between',
        height: 40,
        mb: 1,
      }}
    >
      <Tabs value={query.status} onChange={onChange}>
        {tabProps.map((props) => (
          <Tab {...props} />
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
