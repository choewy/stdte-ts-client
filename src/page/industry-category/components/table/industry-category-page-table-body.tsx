import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { industryCategoryStore } from '@store';

import { IndustryCategoryPageTableBodyRow } from './industry-category-page-table-body-row';

export const IndustryCategoryPageTableBody: FunctionComponent<{ canUpdate: boolean; canDelete: boolean }> = ({
  canUpdate,
  canDelete,
}) => {
  const { list } = industryCategoryStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, index) => (
        <IndustryCategoryPageTableBodyRow
          {...{
            key: ['industry-category-page-table-row', row.id, index].join('-'),
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
