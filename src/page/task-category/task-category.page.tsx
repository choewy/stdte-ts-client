import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { credentialsStore } from '@store';
import { roleService } from '@service';

export const TaskCategoryPage: FunctionComponent = () => {
  const credentials = credentialsStore.useValue();

  const canCreate = roleService.can(credentials, 'taskCategory', RolePolicyLevel.Create);
  const canUpdate = roleService.can(credentials, 'taskCategory', RolePolicyLevel.Update);
  const canDelete = roleService.can(credentials, 'taskCategory', RolePolicyLevel.Delete);

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
    ></Box>
  );
};
