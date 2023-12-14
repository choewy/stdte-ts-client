import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { roleHook } from '@hook';
import { RolePageTable } from './components';

export const RolePage: FunctionComponent = () => {
  const maxWidth = 1080;

  roleHook.useMountRolePage();
  roleHook.useUnmountRolePage();

  return (
    <Box
      sx={{
        mt: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* <CredentialsPageUpdatePasswordDialog /> */}
      <RolePageTable {...{ maxWidth }} />
    </Box>
  );
};
