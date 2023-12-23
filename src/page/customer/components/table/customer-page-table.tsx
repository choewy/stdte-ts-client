import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { customerHook, scrollHook } from '@hook';

import { CustomerPageTableHead } from './customer-page-table-head';
import { CustomerPageTableBody } from './customer-page-table-body';

export const CustomerPageTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  customerHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      elevation={2}
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 150 }}
    >
      <Table stickyHeader>
        <CustomerPageTableHead canUpdate={canUpdate} canDelete={canDelete} />
        <CustomerPageTableBody canUpdate={canUpdate} canDelete={canDelete} />
      </Table>
    </TableContainer>
  );
};
