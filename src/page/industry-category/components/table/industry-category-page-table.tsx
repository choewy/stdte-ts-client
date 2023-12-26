import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { industryCategoryHook, scrollHook } from '@hook';

import { IndustryCategoryPageTableHead } from './industry-category-page-table-head';
import { IndustryCategoryPageTableBody } from './industry-category-page-table-body';

export const IndustryCategoryPageTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  industryCategoryHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      elevation={2}
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 150 }}
    >
      <Table stickyHeader>
        <IndustryCategoryPageTableHead canUpdate={canUpdate} canDelete={canDelete} />
        <IndustryCategoryPageTableBody canUpdate={canUpdate} canDelete={canDelete} />
      </Table>
    </TableContainer>
  );
};
