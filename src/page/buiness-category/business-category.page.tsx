import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { authorizeStore } from '@store';
import { roleService } from '@service';
import { businessCategoryHook } from '@hook';

import {
  BusinessCategoryPageCreateDialog,
  BusinessCategoryPageUpdateDialog,
  BusinessCategoryPageDeleteDialog,
  BusinessCategoryPageToolbar,
  BusinessCategoryPageTable,
} from './components';

export const BusinessCategoryPage: FunctionComponent = () => {
  const authorize = authorizeStore.useValue();

  const canCreate = roleService.can(authorize, 'businessCategory', RolePolicyLevel.Create);
  const canUpdate = roleService.can(authorize, 'businessCategory', RolePolicyLevel.Update);
  const canDelete = roleService.can(authorize, 'businessCategory', RolePolicyLevel.Delete);

  businessCategoryHook.useMount();
  businessCategoryHook.useUnMount();

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
      <BusinessCategoryPageCreateDialog />
      <BusinessCategoryPageUpdateDialog />
      <BusinessCategoryPageDeleteDialog />
      <BusinessCategoryPageToolbar {...{ canCreate }} />
      <BusinessCategoryPageTable {...{ canUpdate, canDelete }} />
    </Box>
  );
};
