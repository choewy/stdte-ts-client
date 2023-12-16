import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { credentialsStore } from '@store';
import { roleService } from '@service';

import { BusinessCategoryPageTable, BusinessCategoryPageToolbar } from './components';

export const BusinessCategoryPage: FunctionComponent = () => {
  const credentials = credentialsStore.useValue();

  const canCreate = roleService.can(credentials, 'businessCategory', RolePolicyLevel.Create);
  const canUpdate = roleService.can(credentials, 'businessCategory', RolePolicyLevel.Update);
  const canDelete = roleService.can(credentials, 'businessCategory', RolePolicyLevel.Delete);

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
      <BusinessCategoryPageToolbar {...{ canCreate }} />
      <BusinessCategoryPageTable {...{ canCreate, canUpdate, canDelete }} />
    </Box>
  );
};
