import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { BusinessCategoryRowResponse } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { BusinessCategoryPageTableBodyRowUpdateButton } from './business-category-page-table-body-row-update-button';
import { BusinessCategoryPageTableBodyRowDeleteButton } from './business-category-page-table-body-row-delete-button';

export const BusinessCategoryPageTableBodyRow: FunctionComponent<{
  index: number;
  row: BusinessCategoryRowResponse;
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
              {canUpdate && <BusinessCategoryPageTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <BusinessCategoryPageTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
