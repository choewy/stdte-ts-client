import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { TaskCategoryRow } from '@service';

import { TaskCategoryPageTableBodyRowChildButton } from './task-category-page-table-body-row-child-button';
import { TaskCategoryPageTableBodyRowUpdateButton } from './task-category-page-table-body-row-update-button';
import { TaskCategoryPageTableBodyRowDeleteButton } from './task-category-page-table-body-row-delete-button';

export const TaskCategoryPageTableBodyRow: FunctionComponent<{
  row: TaskCategoryRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.id} fixedWidth />
      <TableValueCell value={row.name} />
      <TableComponentCell components={<TaskCategoryPageTableBodyRowChildButton {...{ row }} />} />
      <TableValueCell value={row.description} align="left" />
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
