import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { UserRow, enumService } from '@service';

import { UserPageTableBodyRowUpdateButton } from './user-page-table-body-row-update-button';

export const UserPageTableBodyRow: FunctionComponent<{
  row: UserRow;
  canUpdate: boolean;
}> = ({ row, canUpdate }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.id} />
      <>
        <TableValueCell value={row.name} />
        <TableValueCell value={DateTime.fromJSDate(new Date(row.birthday)).toSQLDate() ?? '-'} />
        <TableValueCell value={row.phone === '' ? '-' : row.phone} />
        <TableValueCell value={row.scienceNumber === '' ? '-' : row.scienceNumber} />
      </>
      <>
        <TableValueCell value={row.credentials.email} />
        <TableValueCell value={row.role?.name ?? '없음'} />
        <TableValueCell value={enumService.userStatusToText(row.status)} />
        <TableValueCell value={DateTime.fromJSDate(new Date(row.enteringDay)).toSQLDate() ?? '-'} />
        <TableValueCell value={DateTime.fromJSDate(new Date(row.resignationDay)).toSQLDate() ?? '-'} />
      </>
      <>
        <TableValueCell value={enumService.degreeToText(row.degree, '-')} />
        <TableValueCell value={row.school === '' ? '-' : row.school} />
        <TableValueCell value={row.major === '' ? '-' : row.major} />
      </>
      <>
        <TableValueCell value={row.carType === '' ? '-' : row.carType} />
        <TableValueCell value={row.carNumber === '' ? '-' : row.carNumber} />
      </>
      {canUpdate && <TableComponentCell components={<UserPageTableBodyRowUpdateButton {...{ row }} />} />}
    </TableRow>
  );
};
