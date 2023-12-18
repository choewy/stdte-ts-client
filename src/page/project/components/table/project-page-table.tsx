import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { projectHook, scrollHook } from '@hook';
import { ProjectPageTableHead } from './project-page-table-head';

export const ProjectPageTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  projectHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      elevation={2}
      onScroll={onScroll}
      sx={{
        height: size.innerHeight - 150,
        overflow: 'scroll',
      }}
    >
      <Table stickyHeader>
        <ProjectPageTableHead {...{ canUpdate, canDelete }} />
      </Table>
    </TableContainer>
  );
};
