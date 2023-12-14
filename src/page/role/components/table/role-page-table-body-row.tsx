import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableCell, TableRow } from '@mui/material';

import { RoleAdminRowResponse, tableService } from '@service';

export const RolePageTableBodyRow: FunctionComponent<{ row: RoleAdminRowResponse }> = ({ row }) => {
  const createdAt = DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss');
  const updatedAt = DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss');

  return (
    <TableRow key={['credentials-tbl-row', row.id].join('-')} hover>
      <TableCell align="center" sx={tableService.getWidthByTextLength(row.id, { width: true, minWidth: true })}>
        {row.id}
      </TableCell>
      <TableCell align="center" sx={tableService.getWidthByTextLength(row.name, { minWidth: true }, { width: '100%' })}>
        {row.name}
      </TableCell>
      <TableCell
        align="center"
        sx={tableService.getWidthByTextLength(updatedAt, { width: true, minWidth: true, maxWidth: true })}
      >
        {createdAt}
      </TableCell>
      <TableCell
        align="center"
        sx={tableService.getWidthByTextLength(createdAt, { width: true, minWidth: true, maxWidth: true })}
      >
        {updatedAt}
      </TableCell>
    </TableRow>
  );
};
