import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { scrollHook, userHook } from '@hook';

import { UserPageTableHead } from './user-page-table-head';
import { UserPageTableBody } from './user-page-table-body';

export const UserPageTable: FunctionComponent<{ canUpdate: boolean }> = ({ canUpdate }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  userHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      variant="outlined"
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 150 }}
    >
      <Table stickyHeader>
        <UserPageTableHead canUpdate={canUpdate} />
        <UserPageTableBody canUpdate={canUpdate} />
      </Table>
    </TableContainer>
  );
};
