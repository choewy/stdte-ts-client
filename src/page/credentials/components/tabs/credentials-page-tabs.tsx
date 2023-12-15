import { FunctionComponent, SyntheticEvent, useCallback } from 'react';

import { Box, Button, ButtonGroup, Tab, Tabs } from '@mui/material';

import { CredentialsStatus } from '@common';
import { adminCredentialsStore } from '@store';
import { tabHook } from '@hook';

export const CredentialsPageTabs: FunctionComponent<{ maxWidth: number }> = ({ maxWidth }) => {
  const initQuery = adminCredentialsStore.useInit().query;

  const [{ stats, query }, setAdminCredentials] = adminCredentialsStore.useState();

  const tabProps = tabHook.useCredentialsTabProps(stats);

  const onChange = useCallback(
    (_: SyntheticEvent<Element, Event>, status: CredentialsStatus) => {
      setAdminCredentials((prev) => ({ ...prev, query: { ...initQuery, status } }));
    },
    [setAdminCredentials],
  );

  return (
    <Box
      sx={{
        maxWidth,
        display: 'flex',
        width: '100%',
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
        <Button {...{ children: '내보내기', size: 'small', sx: { width: 64 } }} />
      </ButtonGroup>
    </Box>
  );
};
