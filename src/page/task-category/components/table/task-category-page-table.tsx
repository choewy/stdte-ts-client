import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { scrollHook, taskCategoryHook } from '@hook';

import { TaskCategoryPageTableHead } from './task-category-page-table-head';
import { TaskCategoryPageTableBody } from './task-category-page-table-body';

export const TaskCategoryPageTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  taskCategoryHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      variant="outlined"
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 150, maxWidth: 1080 }}
    >
      <Table stickyHeader>
        <TaskCategoryPageTableHead canUpdate={canUpdate} canDelete={canDelete} />
        <TaskCategoryPageTableBody canUpdate={canUpdate} canDelete={canDelete} />
      </Table>
    </TableContainer>
  );
};
