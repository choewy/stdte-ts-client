import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { roleHook } from '@hook';

import {
  RolePageCreateDialog,
  RolePageUpdateDialog,
  RolePageDeleteDialog,
  RolePageUsersDialog,
  RolePageToolbar,
  RolePageTable,
} from './components';

export const RolePage: FunctionComponent = () => {
  roleHook.useMount();
  roleHook.useUnmount();

  return (
    <Box
      sx={{
        mt: 2,
        paddingX: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <RolePageCreateDialog />
      <RolePageUpdateDialog />
      <RolePageDeleteDialog />
      <RolePageUsersDialog />
      <RolePageToolbar />
      <RolePageTable />
    </Box>
  );
};
