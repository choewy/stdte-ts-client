import { FunctionComponent } from 'react';
import { TableBody } from '@mui/material';

import { adminCredentialsStore } from '@store';

import { CredentialsPageTableBodyRow } from './credentials-page-table-body-row';

export const CredentialsPageTableBody: FunctionComponent = () => {
  const { list } = adminCredentialsStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, i) => (
        <CredentialsPageTableBodyRow key={['credentials-page-table-row', row.id, i].join('-')} row={row} />
      ))}
    </TableBody>
  );
};
