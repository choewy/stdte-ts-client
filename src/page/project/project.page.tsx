import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { roleService } from '@service';
import { authorizeStore } from '@store';
import { projectHook } from '@hook';

import {
  ProjectPageCreateDialog,
  ProjectPageUpdateDialog,
  ProjectPageDeleteDialog,
  ProjectPageTable,
  ProjectPageToolbar,
} from './components';

export const ProjectPage: FunctionComponent = () => {
  const authorize = authorizeStore.useValue();

  const canCreate = roleService.can(authorize, 'project', RolePolicyLevel.Create);
  const canUpdate = roleService.can(authorize, 'project', RolePolicyLevel.Update);
  const canDelete = roleService.can(authorize, 'project', RolePolicyLevel.Delete);

  projectHook.useMount();
  projectHook.useUnMount();

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
      <ProjectPageCreateDialog />
      <ProjectPageUpdateDialog />
      <ProjectPageDeleteDialog />
      <ProjectPageToolbar {...{ canCreate }} />
      <ProjectPageTable {...{ canUpdate, canDelete }} />
    </Box>
  );
};
