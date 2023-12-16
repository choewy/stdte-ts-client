import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { userStore } from '@store';
import { UserPageTableBodyRow } from './user-page-table-body-row';

export const UserPageTableBody: FunctionComponent<{ canUpdate: boolean }> = ({ canUpdate }) => {
  const { list } = userStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, index) => (
        <UserPageTableBodyRow
          {...{
            key: ['user-page-table-row', row.id, index].join('-'),
            index,
            row,
            canUpdate,
          }}
        />
      ))}
    </TableBody>
  );
};
