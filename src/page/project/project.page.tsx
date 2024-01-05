import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { roleService } from '@service';
import { authorizeStore } from '@store';
import { projectHook } from '@hook';

import {
  ProjectPageCreateDialog,
  ProjectPageRecordDialog,
  ProjectPageUpdateDialog,
  ProjectPageDeleteDialog,
  ProjectPageOrderRecordCreateDialog,
  ProjectPageOrderRecordUpdateDialog,
  ProjectPageOrderRecordDeleteDialog,
  ProjectPageSaleRecordCreateDialog,
  ProjectPageSaleRecordUpdateDialog,
  ProjectPageSaleRecordDeleteDialog,
  ProjectPageTable,
  ProjectPageToolbar,
  ProjectPageCaption,
} from './components';

export const ProjectPage: FunctionComponent = () => {
  const authorize = authorizeStore.useValue();

  const canCreate = roleService.can(authorize, 'project', RolePolicyLevel.Create);
  const canUpdate = roleService.can(authorize, 'project', RolePolicyLevel.Update);
  const canDelete = roleService.can(authorize, 'project', RolePolicyLevel.Delete);
  const isAdmin = roleService.can(authorize, 'project', RolePolicyLevel.Admin);

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
      <ProjectPageRecordDialog />
      <ProjectPageUpdateDialog />
      <ProjectPageDeleteDialog />
      <ProjectPageOrderRecordCreateDialog />
      <ProjectPageOrderRecordUpdateDialog />
      <ProjectPageOrderRecordDeleteDialog />
      <ProjectPageSaleRecordCreateDialog />
      <ProjectPageSaleRecordUpdateDialog />
      <ProjectPageSaleRecordDeleteDialog />
      <ProjectPageToolbar {...{ canCreate, canDownload: isAdmin }} />
      <ProjectPageTable {...{ canUpdate, canDelete, isAdmin }} />
      <ProjectPageCaption />
    </Box>
  );
};
