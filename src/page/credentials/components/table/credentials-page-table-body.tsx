import { FunctionComponent } from 'react';
import { TableBody } from '@mui/material';

import { credentialsStore } from '@store';

import { CredentialsPageTableBodyRow } from './credentials-page-table-body-row';

export const CredentialsPageTableBody: FunctionComponent = () => {
  const { list } = credentialsStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, i) => (
        <CredentialsPageTableBodyRow key={['credentials-page-table-row', row.id, i].join('-')} index={i} row={row} />
      ))}
    </TableBody>
  );
};
