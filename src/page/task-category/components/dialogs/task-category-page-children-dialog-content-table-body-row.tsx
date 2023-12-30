import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { TaskCategoryRow, TaskCategoryRowChild } from '@service';

import { TaskCategoryPageChildrenDialogContentTableBodyRowUpdateButton } from './task-category-page-children-dialog-content-table-body-row-update-button';
import { TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton } from './task-category-page-children-dialog-content-table-body-row-delete-button';

export const TaskCategoryPageChildrenDialogContentTableBodyRow: FunctionComponent<{
  parent: TaskCategoryRow;
  child: TaskCategoryRowChild;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ parent, child, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={child.id} fixedWidth />
      <TableValueCell value={child.name} />
      <TableValueCell value={child.description} align="left" />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              {canUpdate && <TaskCategoryPageChildrenDialogContentTableBodyRowUpdateButton {...{ parent, child }} />}
              {canDelete && <TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton {...{ parent, child }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
