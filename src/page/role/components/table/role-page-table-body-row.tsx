import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { RoleAdminRowResponse } from '@service';

import { RolePageTableBodyRowUpdateButton } from './role-page-table-body-row-update-button';
import { RolePageTableBodyRowDeleteButton } from './role-page-table-body-row-delete-button';
import { RolePageTableBodyRowUsersButton } from './role-page-table-body-row-users-button';

export const RolePageTableBodyRow: FunctionComponent<{ row: RoleAdminRowResponse; index: number }> = ({
  row,
  index,
}) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.name} fullWidth />
      <TableComponentCell components={<RolePageTableBodyRowUsersButton {...{ row }} />} />

      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
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
