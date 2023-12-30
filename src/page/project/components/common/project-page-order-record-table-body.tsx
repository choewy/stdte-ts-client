import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { projectRecordStore } from '@store';

import { ProjectPageOrderRecordTableBodyRow } from './project-page-order-record-table-body-row';

export const ProjectPageOrderRecordTableBody: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const { order } = projectRecordStore.useValue();

  return (
    <TableBody>
      {order.list.rows.map((row, index) => (
        <ProjectPageOrderRecordTableBodyRow
          {...{
            key: ['project-page-order-recrod-table-row', row.id, index].join('-'),
            row,
            canUpdate,
            canDelete,
          }}
        />
      ))}
    </TableBody>
  );
};
