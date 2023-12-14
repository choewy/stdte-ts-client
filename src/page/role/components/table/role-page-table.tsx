import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { roleHook, scrollHook } from '@hook';

import { RolePageTableHead } from './role-page-table-head';
import { RolePageTableBody } from './role-page-table-body';

export const RolePageTable: FunctionComponent<{ maxWidth: number }> = ({ maxWidth }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();

  roleHook.useRoleScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      sx={{
        height: size.innerHeight - 150,
        overflow: 'scroll',
        maxWidth,
      }}
    >
      <Table stickyHeader>
        <RolePageTableHead />
        <RolePageTableBody />
      </Table>
    </TableContainer>
  );
};
