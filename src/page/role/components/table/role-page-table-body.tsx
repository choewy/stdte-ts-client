import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { adminRoleStore } from '@store';

import { RolePageTableBodyRow } from './role-page-table-body-row';

export const RolePageTableBody: FunctionComponent = () => {
  const { list } = adminRoleStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, i) => (
        <RolePageTableBodyRow key={['role-page-table-row', row.id, i].join('-')} row={row} />
      ))}
    </TableBody>
  );
};
