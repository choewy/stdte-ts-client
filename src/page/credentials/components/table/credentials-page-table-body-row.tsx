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
      <TableCell align="center" sx={tableService.getWidthByTextLength(row.id, { width: true, minWidth: true })}>
        {row.id}
      </TableCell>
      <TableCell
        align="center"
        sx={tableService.getWidthByTextLength(row.email, { minWidth: true }, { width: '100%' })}
      >
        {row.email}
      </TableCell>
      <TableCell align="center" sx={tableService.getWidthByTextLength(row.name, { width: true, minWidth: true })}>
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

      <TableCell
        align="center"
        sx={tableService.getWidthByButtonTextLength(
          buttonProperties.map((property) => property.label).concat('비밀번호 변경'),
          { width: true, minWidth: true },
        )}
      >
        <Box sx={{ gap: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {buttonProperties.map((property, i) => (
            <CredentialsPageTableBodyRowChangeStatusButton
              {...{
                key: ['credentials-table-row-button', row.id, property.status.next, i].join('-'),
                id: row.id,
                property,
              }}
            />
          ))}
          <CredentialsPageTableBodyRowChangePasswordButton {...{ id: row.id }} />
        </Box>
      </TableCell>
    </TableRow>
  );
};
