import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { RolePolicyLevel } from '@common';
import { TaskCategoryRow, roleService } from '@service';
import { authorizeStore } from '@store';

import { TaskCategoryPageChildrenDialogContentToolbar } from './task-category-page-children-dialog-content-toolbar';
import { TaskCategoryPageChildrenDialogContentTable } from './task-category-page-children-dialog-content-table';

export const TaskCategoryPageChildrenDialogContent: FunctionComponent<{
  parent: TaskCategoryRow;
}> = ({ parent }) => {
  const authorize = authorizeStore.useValue();

  const canCreate = roleService.can(authorize, 'taskCategory', RolePolicyLevel.Create);
  const canUpdate = roleService.can(authorize, 'taskCategory', RolePolicyLevel.Update);
  const canDelete = roleService.can(authorize, 'taskCategory', RolePolicyLevel.Delete);

  return (
    <Box>
      <TaskCategoryPageChildrenDialogContentToolbar {...{ parent, canCreate }} />
      <TaskCategoryPageChildrenDialogContentTable {...{ parent, canUpdate, canDelete }} />
    </Box>
  );
};
