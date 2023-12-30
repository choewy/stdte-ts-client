import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { roleHook, scrollHook } from '@hook';

import { RolePageTableHead } from './role-page-table-head';
import { RolePageTableBody } from './role-page-table-body';

export const RolePageTable: FunctionComponent = () => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  roleHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      variant="outlined"
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 150, width: 600 }}
    >
      <Table stickyHeader>
        <RolePageTableHead />
        <RolePageTableBody />
      </Table>
    </TableContainer>
  );
};
