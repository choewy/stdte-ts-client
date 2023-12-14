import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { Box, TableCell, TableRow } from '@mui/material';

import { CredentialsAdminRowResponse, enumService, tableService } from '@service';

import { CredentialsPageTableBodyRowChangeStatusButton } from './credentials-page-table-body-row-change-status-button';
import { CredentialsPageTableBodyRowChangePasswordButton } from './credentials-page-table-body-row-change-password-button';

export const CredentialsPageTableBodyRow: FunctionComponent<{ row: CredentialsAdminRowResponse }> = ({ row }) => {
  const createdAt = DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss');
  const updatedAt = DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss');

  const buttonProperties = enumService.credentialsStatusComponentProperties(row.status);

  return (
    <TableRow key={['credentials-tbl-row', row.id].join('-')} hover>
      <TableCell
        align="center"
        sx={{
          width: tableService.getWidthByLength(row.id),
          minWidth: tableService.getWidthByLength(row.id),
        }}
      >
        {row.id}
      </TableCell>
      <TableCell align="center" sx={{ flex: 1, minWidth: tableService.getWidthByLength(row.email) }}>
        {row.email}
      </TableCell>
      <TableCell align="center" sx={{ flex: 1, minWidth: tableService.getWidthByLength(row.name) }}>
        {row.name}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          width: tableService.getWidthByLength(updatedAt),
          minWidth: tableService.getWidthByLength(createdAt),
        }}
      >
        {createdAt}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          width: tableService.getWidthByLength(updatedAt),
          minWidth: tableService.getWidthByLength(updatedAt),
        }}
      >
        {updatedAt}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          width: buttonProperties.length > 1 ? 300 : 230,
          minWidth: buttonProperties.length > 1 ? 300 : 230,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {buttonProperties.map((property) => (
            <CredentialsPageTableBodyRowChangeStatusButton {...{ id: row.id, property }} />
          ))}
          <CredentialsPageTableBodyRowChangePasswordButton {...{ id: row.id }} />
        </Box>
      </TableCell>
    </TableRow>
  );
};
