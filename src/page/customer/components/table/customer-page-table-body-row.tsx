import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { CustomerRow } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { CustomerPageTableBodyRowUpdateButton } from './customer-page-table-body-row-update-button';
import { CustomerPageTableBodyRowDeleteButton } from './customer-page-table-body-row-delete-button';

export const CustomerPageTableBodyRow: FunctionComponent<{
  index: number;
  row: CustomerRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ index, row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.alias} fixedWidth />
      <TableValueCell value={row.kr} fixedWidth />
      <TableValueCell value={row.en} fixedWidth />
      <TableValueCell value={row.description} align="left" fullWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
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
