import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { ProjectRecordRow } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { ProjectPageSaleRecordTableBodyRowUpdateButton } from './project-page-sale-record-table-body-row-update-button';
import { ProjectPageSaleRecordTableBodyRowDeleteButton } from './project-page-sale-record-table-body-row-delete-button';

export const ProjectPageSaleRecordTableBodyRow: FunctionComponent<{
  row: ProjectRecordRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.id} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.date)).toSQLDate() ?? ''} />
      <TableValueCell value={Number(row.amount).toLocaleString('ko-KR')} />
      <TableValueCell value={row.description} align="left" />
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
