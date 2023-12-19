import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { ProjectRow, enumService } from '@service';

import { ProjectPageTableBodyRowUpdateButton } from './project-page-table-body-row-update-button';
import { ProjectPageTableBodyRowDeleteButton } from './project-page-table-body-row-delete-button';
import { ProjectPageTableBodyRowRecordButton } from './project-page-table-body-row-record-button';

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
      <TableValueCell value={row.name} align="left" />
      <TableValueCell value={row.difficulty} />
      <TableValueCell value={row.industryCategory?.name ?? ''} />
      <TableValueCell value={row.businessCategory?.name ?? ''} />
      <TableValueCell value={row.customer?.alias ?? ''} />
      <TableValueCell value={Number(row.amount).toLocaleString('ko-KR')} align="right" />
      <TableValueCell value={enumService.projectStatusToText(row.status)} />
      <TableValueCell value={row.description} />
      <TableValueCell value={row.externalOwners.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.externalManagers.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.externalLeaders.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalOwners.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalManagers.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalLeaders.map(({ name }) => name).join(', ')} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.startDate)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.endDate)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={row.months} fixedWidth />
      <TableValueCell value={row.taskCategory?.name ?? ''} />
      <TableValueCell value={row.canExpose === true ? 'O' : 'X'} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              <ProjectPageTableBodyRowRecordButton {...{ row }} />
              {canUpdate && <ProjectPageTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <ProjectPageTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
