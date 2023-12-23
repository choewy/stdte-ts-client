import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { layoutStore, timeRecordLayoutStore } from '@store';

import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';
import { TimeRecordPageTableBodyRow } from './time-record-page-table-body-row';

export const TimeRecordPageTableBody: FunctionComponent = () => {
  const { theme } = layoutStore.useValue();

  const sxMap = new TimeRecordPageTableSxMap(theme);

  const { project } = timeRecordLayoutStore.useValue();

  return (
    <TableBody>
      {project.rows.map((project, index) => (
        <TimeRecordPageTableBodyRow
          key={['time-recrod-page-table-body-row', project.id, project.category.id, index].join('-')}
          sxMap={sxMap}
          project={project}
        />
      ))}
    </TableBody>
  );
};
