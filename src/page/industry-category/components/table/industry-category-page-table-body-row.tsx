import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { IndustryCategoryRow } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { IndustryCategoryPageTableBodyRowUpdateButton } from './industry-category-page-table-body-row-update-button';
import { IndustryCategoryPageTableBodyRowDeleteButton } from './industry-category-page-table-body-row-delete-button';

export const IndustryCategoryPageTableBodyRow: FunctionComponent<{
  index: number;
  row: IndustryCategoryRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ index, row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={index + 1} />
      <TableValueCell value={row.name} fixedWidth />
      <TableValueCell value={row.description} align="left" fullWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.createdAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      <TableValueCell value={DateTime.fromJSDate(new Date(row.updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')} fixedWidth />
      {(canUpdate || canDelete) && (
        <TableComponentCell
          components={
            <>
              {canUpdate && <IndustryCategoryPageTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <IndustryCategoryPageTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
