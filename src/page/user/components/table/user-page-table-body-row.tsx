import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { UserRowResponse, enumService } from '@service';

import { UserPageTableBodyRowUpdateButton } from './user-page-table-body-row-update-button';

export const UserPageTableBodyRow: FunctionComponent<{ index: number; row: UserRowResponse }> = ({ index, row }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.name} fullWidth />
      <TableValueCell value={row.credentials.email} />
      <TableValueCell value={enumService.usetStatusToText(row.status, '-')} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.enteringDay)).toSQLDate() ?? '-'} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.resignationDay)).toSQLDate() ?? '-'} />
      <TableValueCell value={row.role?.name ?? '-'} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.birthday)).toSQLDate() ?? '-'} />
      <TableValueCell value={row.scienceNumber === '' ? '-' : row.scienceNumber} />
      <TableValueCell value={enumService.degreeToText(row.degree, '-')} />
      <TableValueCell value={row.school === '' ? '-' : row.school} />
      <TableValueCell value={row.major === '' ? '-' : row.major} />
      <TableValueCell value={row.carType === '' ? '-' : row.carType} />
      <TableValueCell value={row.carNumber === '' ? '-' : row.carNumber} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableComponentCell
        components={[
          <UserPageTableBodyRowUpdateButton
            {...{
              key: ['user-page-table-update-button', row.id, index].join('-'),
              row,
            }}
          />,
        ]}
      />
    </TableRow>
  );
};
