import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { ProjectRow, enumService } from '@service';

import { ProjectPageTableBodyRowOrderRecordButton } from './project-page-table-body-row-order-record-button';
import { ProjectPageTableBodyRowSaleRecordButton } from './project-page-table-body-row-sale-record-button';
import { ProjectPageTableBodyRowUpdateButton } from './project-page-table-body-row-update-button';
import { ProjectPageTableBodyRowDeleteButton } from './project-page-table-body-row-delete-button';

export const ProjectPageTableBodyRow: FunctionComponent<{
  index: number;
  row: ProjectRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ index, row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.code} />
      <TableValueCell value={row.name} />
      <TableValueCell value={row.difficulty} />
      <TableValueCell value={row.businessCategory?.name ?? ''} />
      <TableValueCell value={row.industryCategory?.name ?? ''} />
      <TableValueCell value={row.customer?.alias ?? ''} />
      <TableValueCell value={row.amount} />
      <TableValueCell value={row.description} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.startDate)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.endDate)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.keepDate)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={enumService.projectStatusToText(row.status)} />
      <TableComponentCell
        components={
          <>
            {<ProjectPageTableBodyRowOrderRecordButton {...{ row }} />}
            {<ProjectPageTableBodyRowSaleRecordButton {...{ row }} />}
          </>
        }
      />
      <TableValueCell value={row.externalOwners.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.externalManagers.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.externalLeaders.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalOwners.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalManagers.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalLeaders.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.taskCategory?.name ?? ''} />
      <TableValueCell value={row.canExpose === true ? 'O' : 'X'} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              {canUpdate && <ProjectPageTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <ProjectPageTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
