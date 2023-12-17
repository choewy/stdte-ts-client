import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { authorizeStore } from '@store';
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
  const authorize = authorizeStore.useValue();

  const canCreate = roleService.can(authorize, 'customer', RolePolicyLevel.Create);
  const canUpdate = roleService.can(authorize, 'customer', RolePolicyLevel.Update);
  const canDelete = roleService.can(authorize, 'customer', RolePolicyLevel.Delete);

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
