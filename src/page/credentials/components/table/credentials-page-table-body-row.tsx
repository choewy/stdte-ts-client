import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { CredentialsRow, enumService } from '@service';

import { CredentialsPageTableBodyRowChangeStatusButton } from './credentials-page-table-body-row-change-status-button';
import { CredentialsPageTableBodyRowChangePasswordButton } from './credentials-page-table-body-row-change-password-button';

export const CredentialsPageTableBodyRow: FunctionComponent<{
  row: CredentialsRow;
}> = ({ row }) => {
  const keyPrefix = 'credentials-table-row';

  const buttonProperties = enumService.credentialsStatusComponentProperties(row.status);

  return (
    <TableRow hover>
      <TableValueCell value={row.id} fixedWidth />
      <TableValueCell value={row.name} />
      <TableValueCell value={row.email} />
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
