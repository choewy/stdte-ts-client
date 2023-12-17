import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { TaskCategoryRow } from '@service';

import { TaskCategoryPageTableBodyRowChildButton } from './task-category-page-table-body-row-child-button';
import { TaskCategoryPageTableBodyRowUpdateButton } from './task-category-page-table-body-row-update-button';
import { TaskCategoryPageTableBodyRowDeleteButton } from './task-category-page-table-body-row-delete-button';

export const TaskCategoryPageTableBodyRow: FunctionComponent<{
  index: number;
  row: TaskCategoryRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ index, row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.name} fixedWidth />
      <TableComponentCell components={<TaskCategoryPageTableBodyRowChildButton {...{ row }} />} />
      <TableValueCell value={row.description} align="left" fullWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              {canUpdate && <TaskCategoryPageTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <TaskCategoryPageTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
