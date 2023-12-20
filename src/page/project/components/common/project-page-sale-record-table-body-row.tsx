import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { ProjectRecordRow } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { ProjectPageSaleRecordTableBodyRowUpdateButton } from './project-page-sale-record-table-body-row-update-button';
import { ProjectPageSaleRecordTableBodyRowDeleteButton } from './project-page-sale-record-table-body-row-delete-button';

export const ProjectPageSaleRecordTableBodyRow: FunctionComponent<{
  index: number;
  row: ProjectRecordRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ index, row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.date)).toSQLDate() ?? ''} fixedWidth />
      <TableValueCell value={Number(row.amount).toLocaleString('ko-KR')} fixedWidth />
      <TableValueCell value={row.description} fullWidth align="left" />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              {canUpdate && <ProjectPageSaleRecordTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <ProjectPageSaleRecordTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
