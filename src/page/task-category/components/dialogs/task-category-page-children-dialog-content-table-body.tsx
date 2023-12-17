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
      {parent.children.map((child, index) => (
        <TaskCategoryPageChildrenDialogContentTableBodyRow
          {...{
            key: ['task-category-page-children-table-row', parent.id, child.id, index].join('-'),
            index,
            parent,
            child,
            canUpdate,
            canDelete,
          }}
        />
      ))}
    </TableBody>
  );
};
