import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { userHook } from '@hook';
import { authorizeStore } from '@store';
import { roleService } from '@service';

import { UserPageUpdateDialog, UserPageToolbar, UserPageTable } from './components';

export const UserPage: FunctionComponent = () => {
  const authorize = authorizeStore.useValue();

  const canUpdate = roleService.can(authorize, 'user', RolePolicyLevel.Update);

  userHook.useMount();
  userHook.useUnMount();

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
      <UserPageUpdateDialog />
      <UserPageToolbar />
      <UserPageTable canUpdate={canUpdate} />
    </Box>
  );
};
