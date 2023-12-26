import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { businessCategoryHook, scrollHook } from '@hook';

import { BusinessCategoryPageTableHead } from './business-category-page-table-head';
import { BusinessCategoryPageTableBody } from './business-category-page-table-body';

export const BusinessCategoryPageTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  businessCategoryHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      variant="outlined"
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 150 }}
    >
      <Table stickyHeader>
        <BusinessCategoryPageTableHead canUpdate={canUpdate} canDelete={canDelete} />
        <BusinessCategoryPageTableBody canUpdate={canUpdate} canDelete={canDelete} />
      </Table>
    </TableContainer>
  );
};
