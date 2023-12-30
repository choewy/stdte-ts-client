import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { customerStore } from '@store';

import { CustomerPageTableBodyRow } from './customer-page-table-body-row';

export const CustomerPageTableBody: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const { list } = customerStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, index) => (
        <CustomerPageTableBodyRow
          {...{
            key: ['customer-page-table-row', row.id, index].join('-'),
            row,
            canUpdate,
            canDelete,
          }}
        />
      ))}
    </TableBody>
  );
};
