import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { ProjectRecordType } from '@service';
import { layoutStore } from '@store';
import { projectRecordHook, scrollHook } from '@hook';

import { ProjectPageOrderRecordTableHead } from './project-page-order-record-table-head';
import { ProjectPageOrderRecordTableBody } from './project-page-order-record-table-body';

export const ProjectPageOrderRecordTable: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const type = ProjectRecordType.Order;

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
      sx={{
        height: size.innerHeight - 200,
        overflow: 'scroll',
      }}
    >
      <Table stickyHeader>
        <ProjectPageOrderRecordTableHead {...{ canUpdate, canDelete }} />
        <ProjectPageOrderRecordTableBody {...{ canUpdate, canDelete }} />
      </Table>
    </TableContainer>
  );
};
