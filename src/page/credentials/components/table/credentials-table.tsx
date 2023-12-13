import { FunctionComponent } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { layoutStore } from '@store';

import { CredentialsTableHead } from './credentials-table-head';
import { CredentialsTableBody } from './credentials-table-body';

export const CredentialsTable: FunctionComponent<{ maxWidth: number }> = ({ maxWidth }) => {
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
        <CredentialsTableHead />
        <CredentialsTableBody />
      </Table>
    </TableContainer>
  );
};
