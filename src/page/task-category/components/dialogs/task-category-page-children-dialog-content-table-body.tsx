import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { TaskCategoryRow } from '@service';

import { TaskCategoryPageChildrenDialogContentTableBodyRow } from './task-category-page-children-dialog-content-table-body-row';

export const TaskCategoryPageChildrenDialogContentTableBody: FunctionComponent<{
  parent: TaskCategoryRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ parent, canUpdate, canDelete }) => {
  return (
    <TableBody>
      {parent.children.map((row, index) => (
        <TaskCategoryPageChildrenDialogContentTableBodyRow
          {...{
            key: ['task-category-page-children-table-row', row.id, index].join('-'),
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
