import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { businessCategoryStore } from '@store';

import { BusinessCategoryPageTableBodyRow } from './business-category-page-table-body-row';

export const BusinessCategoryPageTableBody: FunctionComponent<{ canUpdate: boolean; canDelete: boolean }> = ({
  canUpdate,
  canDelete,
}) => {
  const { list } = businessCategoryStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, index) => (
        <BusinessCategoryPageTableBodyRow
          {...{
            key: ['business-category-page-table-row', row.id, index].join('-'),
            index,
            row,
            canUpdate,
            canDelete,
          }}
        />
      ))}
    </TableBody>
  );
};
