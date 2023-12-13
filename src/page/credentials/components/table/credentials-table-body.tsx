import { FunctionComponent } from 'react';
import { TableBody } from '@mui/material';

import { adminCredentialsStore } from '@store';

import { CredentialsTableRow } from './credentials-table-row';

export const CredentialsTableBody: FunctionComponent = () => {
  const { list } = adminCredentialsStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row) => (
        <CredentialsTableRow key={['credentials-table-row', row.id].join('-')} row={row} />
      ))}
    </TableBody>
  );
};
