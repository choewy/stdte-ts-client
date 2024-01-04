import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableComponentCell, TableValueCell } from '@component';
import { ProjectRow, enumService } from '@service';

import { ProjectPageTableBodyRowUpdateButton } from './project-page-table-body-row-update-button';
import { ProjectPageTableBodyRowDeleteButton } from './project-page-table-body-row-delete-button';
import { ProjectPageTableBodyRowRecordButton } from './project-page-table-body-row-record-button';

export const ProjectPageTableBodyRow: FunctionComponent<{
  row: ProjectRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.id} />
      <TableValueCell value={row.code} />
      <TableValueCell value={row.name} align="left" />
      <TableValueCell value={row.difficulty} />
      <TableValueCell value={row.industryCategory?.name ?? ''} />
      <TableValueCell value={row.businessCategory?.name ?? ''} />
      <TableValueCell value={row.customer?.alias ?? ''} />
      <TableValueCell value={Number(row.amount).toLocaleString('ko-KR')} align="right" />
      <TableValueCell value={enumService.projectStatusToText(row.status)} />
      <TableValueCell value={row.description} align="left" />
      <TableComponentCell components={<ProjectPageTableBodyRowRecordButton {...{ row }} />} />
      <TableValueCell value={row.externalManagers.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalManagers.map(({ name }) => name).join(', ')} />
      <TableValueCell value={row.internalLeaders.map(({ name }) => name).join(', ')} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.startDate)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.endDate)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={row.months} fixedWidth />
      <TableValueCell value={row.canExpose === true ? 'O' : 'X'} />
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
