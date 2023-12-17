import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { authorizeStore } from '@store';
import { roleService } from '@service';

export const TaskCategoryPage: FunctionComponent = () => {
  const authorize = authorizeStore.useValue();

  const canCreate = roleService.can(authorize, 'taskCategory', RolePolicyLevel.Create);
  const canUpdate = roleService.can(authorize, 'taskCategory', RolePolicyLevel.Update);
  const canDelete = roleService.can(authorize, 'taskCategory', RolePolicyLevel.Delete);

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
