import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';

import { CredentialsPageTableHead } from './credentials-page-table-head';
import { CredentialsPageTableBody } from './credentials-page-table-body';

export const CredentialsPageTable: FunctionComponent<{ maxWidth: number }> = ({ maxWidth }) => {
  const size = layoutStore.useValue().size;

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: size.innerHeight - 150,
        overflow: 'scroll',
        maxWidth,
      }}
    >
      <Table stickyHeader>
        <CredentialsPageTableHead />
        <CredentialsPageTableBody />
      </Table>
    </TableContainer>
  );
};
