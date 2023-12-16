import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { CredentialsAdminRowResponse, enumService } from '@service';

import { CredentialsPageTableBodyRowChangeStatusButton } from './credentials-page-table-body-row-change-status-button';
import { CredentialsPageTableBodyRowChangePasswordButton } from './credentials-page-table-body-row-change-password-button';

export const CredentialsPageTableBodyRow: FunctionComponent<{ row: CredentialsAdminRowResponse; index: number }> = ({
  row,
  index,
}) => {
  const keyPrefix = 'credentials-table-row';

  const buttonProperties = enumService.credentialsStatusComponentProperties(row.status);

  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.email} fullWidth />
      <TableValueCell value={row.name} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableComponentCell
        components={
          <>
            {buttonProperties
              .map((property, i) => (
                <CredentialsPageTableBodyRowChangeStatusButton
                  {...{
                    key: [keyPrefix, 'status-button', row.id, property.status.next, i].join('-'),
                    id: row.id,
                    property,
                  }}
                />
              ))
              .concat([
                <CredentialsPageTableBodyRowChangePasswordButton
                  {...{
                    key: [keyPrefix, 'password-button', row.id].join('-'),
                    id: row.id,
                  }}
                />,
              ])}
          </>
        }
      />
    </TableRow>
  );
};
