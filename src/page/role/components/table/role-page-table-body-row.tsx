import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { Box, TableCell, TableRow } from '@mui/material';

import { RoleAdminRowResponse, sizeService } from '@service';

import { RolePageTableBodyRowUpdateButton } from './role-page-table-body-row-update-button';
import { RolePageTableBodyRowDeleteButton } from './role-page-table-body-row-delete-button';
import { RolePageTableBodyRowUsersButton } from './role-page-table-body-row-users-button';

export const RolePageTableBodyRow: FunctionComponent<{ row: RoleAdminRowResponse; index: number }> = ({
  row,
  index,
}) => {
  const createdAt = DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss');
  const updatedAt = DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss');

  return (
    <TableRow key={['credentials-tbl-row', row.id].join('-')} hover>
      <TableCell align="center" sx={sizeService.getWidthByTextLength(index + 1, { width: true, minWidth: true })}>
        {index + 1}
      </TableCell>
      <TableCell align="center" sx={sizeService.getWidthByTextLength(row.name, { minWidth: true }, { width: '100%' })}>
        {row.name}
      </TableCell>
      <TableCell align="center">
        <Box sx={{ gap: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <RolePageTableBodyRowUsersButton {...{ row }} />
        </Box>
      </TableCell>
      <TableCell
        align="center"
        sx={sizeService.getWidthByTextLength(updatedAt, { width: true, minWidth: true, maxWidth: true })}
      >
        {createdAt}
      </TableCell>
      <TableCell
        align="center"
        sx={sizeService.getWidthByTextLength(createdAt, { width: true, minWidth: true, maxWidth: true })}
      >
        {updatedAt}
      </TableCell>
      <TableCell align="center">
        <Box sx={{ gap: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <RolePageTableBodyRowUpdateButton {...{ row }} />
          <RolePageTableBodyRowDeleteButton {...{ row }} />
        </Box>
      </TableCell>
    </TableRow>
  );
};
