import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { BusinessCategoryRow } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { BusinessCategoryPageTableBodyRowUpdateButton } from './business-category-page-table-body-row-update-button';
import { BusinessCategoryPageTableBodyRowDeleteButton } from './business-category-page-table-body-row-delete-button';

export const BusinessCategoryPageTableBodyRow: FunctionComponent<{
  row: BusinessCategoryRow;
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ row, canUpdate, canDelete }) => {
  return (
    <TableRow hover>
      <TableValueCell value={row.id} fixedWidth />
      <TableValueCell value={row.name} />
      <TableValueCell value={row.description} align="left" />
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
