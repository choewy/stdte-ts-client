import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { projectStore } from '@store';

import { ProjectPageTableBodyRow } from './project-page-table-body-row';

export const ProjectPageTableBody: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  const { list } = projectStore.useValue();

  return (
    <TableBody>
      {list.rows.map((row, index) => (
        <ProjectPageTableBodyRow
          {...{
            key: ['project-page-table-row', row.id, index].join('-'),
            row,
            canUpdate,
            canDelete,
          }}
        />
      ))}
    </TableBody>
  );
};
