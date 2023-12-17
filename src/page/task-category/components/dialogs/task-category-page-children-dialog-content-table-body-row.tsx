import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { TaskCategoryRow, TaskCategoryRowChild } from '@service';

import { TaskCategoryPageChildrenDialogContentTableBodyRowUpdateButton } from './task-category-page-children-dialog-content-table-body-row-update-button';
import { TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton } from './task-category-page-children-dialog-content-table-body-row-delete-button';

export const TaskCategoryPageChildrenDialogContentTableBodyRow: FunctionComponent<{
  index: number;
  parent: TaskCategoryRow;
  child: TaskCategoryRowChild;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ index, parent, child, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={child.name} fixedWidth />
      <TableValueCell value={child.description} align="left" fullWidth />
      <TableValueCell
        value={DateTime.fromJSDate(new Date(child.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')}
        fixedWidth
      />
      <TableValueCell
        value={DateTime.fromJSDate(new Date(child.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')}
        fixedWidth
      />
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
