import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { IndustryCategoryRow } from '@service';
import { TableComponentCell, TableValueCell } from '@component';

import { IndustryCategoryPageTableBodyRowUpdateButton } from './industry-category-page-table-body-row-update-button';
import { IndustryCategoryPageTableBodyRowDeleteButton } from './industry-category-page-table-body-row-delete-button';

export const IndustryCategoryPageTableBodyRow: FunctionComponent<{
  row: IndustryCategoryRow;
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
              {canUpdate && <IndustryCategoryPageTableBodyRowUpdateButton {...{ row }} />}
              {canDelete && <IndustryCategoryPageTableBodyRowDeleteButton {...{ row }} />}
            </>
          }
        />
      )}
    </TableRow>
  );
};
