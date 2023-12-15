import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { Box, TableCell, TableRow } from '@mui/material';

import { RoleAdminRowResponse, tableService } from '@service';

import { RolePageTableBodyRowUpdateButton } from './role-page-table-body-row-update-button';
import { RolePageTableBodyRowDeleteButton } from './role-page-table-body-row-delete-button';

export const RolePageTableBodyRow: FunctionComponent<{ row: RoleAdminRowResponse; index: number }> = ({
  row,
  index,
}) => {
  const users = `${row.users.length}명`;

  const createdAt = DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss');
  const updatedAt = DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss');

  return (
    <TableRow key={['credentials-tbl-row', row.id].join('-')} hover>
      <TableCell align="center" sx={tableService.getWidthByTextLength(index + 1, { width: true, minWidth: true })}>
        {index + 1}
      </TableCell>
      <TableCell align="center" sx={tableService.getWidthByTextLength(row.name, { minWidth: true }, { width: '100%' })}>
        {row.name}
      </TableCell>
      <TableCell align="center" sx={tableService.getWidthByTextLength(users, { width: true, minWidth: true })}>
        {users}
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
      <TableCell
        align="center"
        sx={tableService.getWidthByButtonTextLength(['수정', '삭제'], { width: true, minWidth: true })}
      >
        <Box sx={{ gap: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <RolePageTableBodyRowUpdateButton {...{ row }} />
          <RolePageTableBodyRowDeleteButton {...{ row }} />
        </Box>
      </TableCell>
    </TableRow>
  );
};
