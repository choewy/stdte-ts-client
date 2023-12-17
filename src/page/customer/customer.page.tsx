import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { credentialsStore } from '@store';
import { customerHook } from '@hook';
import { roleService } from '@service';

import {
  CustomerPageCreateDialog,
  CustomerPageUpdateDialog,
  CustomerPageDeleteDialog,
  CustomerPageToolbar,
  CustomerPageTable,
} from './components';

export const CustomerPage: FunctionComponent = () => {
  const credentials = credentialsStore.useValue();

  const canCreate = roleService.can(credentials, 'customer', RolePolicyLevel.Create);
  const canUpdate = roleService.can(credentials, 'customer', RolePolicyLevel.Update);
  const canDelete = roleService.can(credentials, 'customer', RolePolicyLevel.Delete);

  customerHook.useMount();
  customerHook.useUnMount();

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
      <CustomerPageCreateDialog />
      <CustomerPageUpdateDialog />
      <CustomerPageDeleteDialog />
      <CustomerPageToolbar {...{ canCreate }} />
      <CustomerPageTable {...{ canUpdate, canDelete }} />
    </Box>
  );
};
