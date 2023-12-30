import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';
import { credentialsHook, scrollHook } from '@hook';

import { CredentialsPageTableHead } from './credentials-page-table-head';
import { CredentialsPageTableBody } from './credentials-page-table-body';

export const CredentialsPageTable: FunctionComponent = () => {
  const size = layoutStore.useValue().size;
  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  credentialsHook.useScrollEnd(scroll.end);

  return (
    <TableContainer
      ref={scroll.ref}
      component={Paper}
      variant="outlined"
      onScroll={onScroll}
      sx={{ height: size.innerHeight - 150, maxWidth: 600 }}
    >
      <Table stickyHeader>
        <CredentialsPageTableHead />
        <CredentialsPageTableBody />
      </Table>
    </TableContainer>
  );
};
