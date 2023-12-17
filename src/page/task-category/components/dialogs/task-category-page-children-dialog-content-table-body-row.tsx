import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { TaskCategoryRowChild } from '@service';

import { TaskCategoryPageChildrenDialogContentTableBodyRowUpdateButton } from './task-category-page-children-dialog-content-table-body-row-update-button';
import { TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton } from './task-category-page-children-dialog-content-table-body-row-delete-button';

export const TaskCategoryPageChildrenDialogContentTableBodyRow: FunctionComponent<{
  index: number;
  row: TaskCategoryRowChild;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ index, row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.name} fixedWidth />
      <TableValueCell value={row.description} align="left" fullWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              {canUpdate && <TaskCategoryPageChildrenDialogContentTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <TaskCategoryPageChildrenDialogContentTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
