import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { TaskCategoryRow } from '@service';

import { TaskCategoryPageChildrenDialogContentTableHead } from './task-category-page-children-dialog-content-table-head';
import { TaskCategoryPageChildrenDialogContentTableBody } from './task-category-page-children-dialog-content-table-body';

export const TaskCategoryPageChildrenDialogContentTable: FunctionComponent<{
  parent: TaskCategoryRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ parent, canUpdate, canDelete }) => {
  const size = layoutStore.useValue().size;

  return (
    <TableContainer component={Paper} variant="outlined" sx={{ height: size.innerHeight - 200, maxWidth: 1080 }}>
      <Table>
        <TaskCategoryPageChildrenDialogContentTableHead {...{ canUpdate, canDelete }} />
        <TaskCategoryPageChildrenDialogContentTableBody {...{ parent, canUpdate, canDelete }} />
      </Table>
    </TableContainer>
  );
};
