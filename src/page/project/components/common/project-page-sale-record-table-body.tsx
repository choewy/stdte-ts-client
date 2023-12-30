import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { projectRecordStore } from '@store';

import { ProjectPageSaleRecordTableBodyRow } from './project-page-sale-record-table-body-row';

export const ProjectPageSaleRecordTableBody: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const { sale } = projectRecordStore.useValue();

  return (
    <TableBody>
      {sale.list.rows.map((row, index) => (
        <ProjectPageSaleRecordTableBodyRow
          {...{
            key: ['project-page-sale-recrod-table-row', row.id, index].join('-'),
            row,
            canUpdate,
            canDelete,
          }}
        />
      ))}
    </TableBody>
  );
};
