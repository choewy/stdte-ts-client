import { FunctionComponent, SyntheticEvent, useCallback } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import { CredentialsStatus } from '@common';
import { adminCredentialsStore } from '@store';
import { tabHook } from '@hook';

export const CredentialsPageTabs: FunctionComponent<{ maxWidth: number }> = () => {
  const [{ stats, query }, setAdminCredentials] = adminCredentialsStore.useState();

  const tabProps = tabHook.useCredentialsTabProps(stats);

  const onChange = useCallback(
    (_: SyntheticEvent<Element, Event>, status: CredentialsStatus) => {
      setAdminCredentials((prev) => ({ ...prev, query: { ...prev.query, status } }));
    },
    [setAdminCredentials],
  );

  return (
    <Box>
      <Tabs value={query.status} onChange={onChange}>
        {tabProps.map((props) => (
          <Tab {...props} />
        ))}
      </Tabs>
    </Box>
  );
};
