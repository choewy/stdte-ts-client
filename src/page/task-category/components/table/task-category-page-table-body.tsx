import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { taskCategoryStore } from '@store';

import { TaskCategoryPageTableBodyRow } from './task-category-page-table-body-row';

export const TaskCategoryPageTableBody: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const { list } = taskCategoryStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, index) => (
        <TaskCategoryPageTableBodyRow
          {...{
            key: ['task-category-page-table-row', row.id, index].join('-'),
            index,
            row,
            canUpdate,
            canDelete,
          }}
        />
      ))}
    </TableBody>
  );
};
