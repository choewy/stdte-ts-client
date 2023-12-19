import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { scrollHook } from '@hook';

import { ProjectPageSaleRecordTableHead } from './project-page-sale-record-table-head';

export const ProjectPageSaleRecordTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  // projectHook.useScrollEndSaleRecord(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      elevation={2}
      onScroll={onScroll}
      sx={{
        height: size.innerHeight - 200,
        overflow: 'scroll',
      }}
    >
      <Table stickyHeader>
        <ProjectPageSaleRecordTableHead {...{ canUpdate, canDelete }} />
        {/* <ProjectPageTableBody {...{ canUpdate, canDelete }} /> */}
      </Table>
    </TableContainer>
  );
};
