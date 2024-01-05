import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { projectHook, scrollHook } from '@hook';
import { ProjectPageTableHead } from './project-page-table-head';
import { ProjectPageTableBody } from './project-page-table-body';

export const ProjectPageTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
  isAdmin: boolean;
}> = ({ canUpdate, canDelete, isAdmin }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  projectHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      variant="outlined"
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 180 }}
    >
      <Table stickyHeader>
        <ProjectPageTableHead {...{ canUpdate, canDelete, isAdmin }} />
        <ProjectPageTableBody {...{ canUpdate, canDelete, isAdmin }} />
      </Table>
    </TableContainer>
  );
};
