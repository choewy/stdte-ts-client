import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { Button, TableCell, TableRow } from '@mui/material';

import { CredentialsAdminRowResponse, enumService } from '@service';
import { tableHook } from '@hook';

export const CredentialsTableRow: FunctionComponent<{ row: CredentialsAdminRowResponse }> = ({ row }) => {
  const statusText = enumService.credentialsStatusToText(row.status);

  const createdAt = DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss');
  const updatedAt = DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss');

  return (
    <TableRow key={['credentials-tbl-row', row.id].join('-')} hover>
      <TableCell align="center" sx={{ minWidth: tableHook.calcMinWidth(row.id) }}>
        {row.id}
      </TableCell>
      <TableCell align="center" sx={{ flex: 1, minWidth: tableHook.calcMinWidth(row.email) }}>
        {row.email}
      </TableCell>
      <TableCell align="center" sx={{ flex: 1, minWidth: tableHook.calcMinWidth(row.name) }}>
        {row.name}
      </TableCell>
      <TableCell align="center" sx={{ minWidth: tableHook.calcMinWidth(createdAt) }}>
        {createdAt}
      </TableCell>
      <TableCell align="center" sx={{ minWidth: tableHook.calcMinWidth(updatedAt) }}>
        {updatedAt}
      </TableCell>
      <TableCell align="center" sx={{ minWidth: tableHook.calcMinWidth(statusText) }}>
        <Button {...{ children: '승인', fullWidth: false, size: 'small' }} />
      </TableCell>
    </TableRow>
  );
};
