import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { ProjectRecordType } from '@service';
import { layoutStore } from '@store';
import { projectRecordHook, scrollHook } from '@hook';

import { ProjectPageSaleRecordTableHead } from './project-page-sale-record-table-head';
import { ProjectPageSaleRecordTableBody } from './project-page-sale-record-table-body';

export const ProjectPageSaleRecordTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const type = ProjectRecordType.Sale;

  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  projectRecordHook.useScrollEnd(type, scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      elevation={2}
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 200 }}
    >
      <Table stickyHeader>
        <ProjectPageSaleRecordTableHead {...{ canUpdate, canDelete }} />
        <ProjectPageSaleRecordTableBody {...{ canUpdate, canDelete }} />
      </Table>
    </TableContainer>
  );
};
