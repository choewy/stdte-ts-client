import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { RoleRow } from '@service';

import { RolePageTableBodyRowUpdateButton } from './role-page-table-body-row-update-button';
import { RolePageTableBodyRowDeleteButton } from './role-page-table-body-row-delete-button';
import { RolePageTableBodyRowUsersButton } from './role-page-table-body-row-users-button';

export const RolePageTableBodyRow: FunctionComponent<{ row: RoleRow }> = ({ row }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.id} fixedWidth />
      <TableValueCell value={row.name} />
      <TableComponentCell components={<RolePageTableBodyRowUsersButton {...{ row }} />} />
      <TableComponentCell
        components={
          <>
            <RolePageTableBodyRowUpdateButton {...{ row }} />
            <RolePageTableBodyRowDeleteButton {...{ row }} />
          </>
        }
      />
    </TableRow>
  );
};
