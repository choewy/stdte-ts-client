import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { credentialsStore } from '@store';
import { roleService } from '@service';
import { industryCategoryHook } from '@hook';

import {
  IndustryCategoryPageCreateDialog,
  IndustryCategoryPageUpdateDialog,
  IndustryCategoryPageDeleteDialog,
  IndustryCategoryPageToolbar,
  IndustryCategoryPageTable,
} from './components';

export const IndustryCategoryPage: FunctionComponent = () => {
  const credentials = credentialsStore.useValue();

  const canCreate = roleService.can(credentials, 'industryCategory', RolePolicyLevel.Create);
  const canUpdate = roleService.can(credentials, 'industryCategory', RolePolicyLevel.Update);
  const canDelete = roleService.can(credentials, 'industryCategory', RolePolicyLevel.Delete);

  industryCategoryHook.useMount();
  industryCategoryHook.useUnMount();

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
      <IndustryCategoryPageCreateDialog />
      <IndustryCategoryPageUpdateDialog />
      <IndustryCategoryPageDeleteDialog />
      <IndustryCategoryPageToolbar {...{ canCreate }} />
      <IndustryCategoryPageTable {...{ canUpdate, canDelete }} />
    </Box>
  );
};
