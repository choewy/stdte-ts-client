import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { scrollHook, userHook } from '@hook';

import { UserPageTableHead } from './user-page-table-head';
import { UserPageTableBody } from './user-page-table-body';

export const UserPageTable: FunctionComponent = () => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  userHook.useScrollEnd(scroll.end);

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
        <UserPageTableHead />
        <UserPageTableBody />
      </Table>
    </TableContainer>
  );
};