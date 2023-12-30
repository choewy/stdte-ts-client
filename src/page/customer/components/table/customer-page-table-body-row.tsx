import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { CustomerRow } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { CustomerPageTableBodyRowUpdateButton } from './customer-page-table-body-row-update-button';
import { CustomerPageTableBodyRowDeleteButton } from './customer-page-table-body-row-delete-button';

export const CustomerPageTableBodyRow: FunctionComponent<{
  row: CustomerRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.id} fixedWidth />
      <TableValueCell value={row.alias} />
      <TableValueCell value={row.kr} />
      <TableValueCell value={row.en} />
      <TableValueCell value={row.description} align="left" />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              {canUpdate && <CustomerPageTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <CustomerPageTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
