import { FunctionComponent } from 'react';

import { TableRow } from '@mui/material';

import { TableValueCell } from '@component';
import { TimeProjectRow } from '@service';

import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';
import { TimeRecordPageTableBodyRowTimeRecordCells } from './time-record-page-table-body-row-time-cells';

export const TimeRecordPageTableBodyRow: FunctionComponent<{
  project: TimeProjectRow;
  sxMap: TimeRecordPageTableSxMap;
}> = ({ project, sxMap }) => {
  return (
    <>
      <TableRow>
        <TableValueCell
          value={project.name}
          rowSpan={project.category.children.length + 1}
          sx={sxMap.projectNameBodyCellSx()}
        />
        <TableValueCell
          value={project.code}
          rowSpan={project.category.children.length + 1}
          sx={sxMap.projectCodeBodyCellSx()}
        />
        <TableValueCell
          value={project.category.name}
          rowSpan={project.category.children.length + 1}
          sx={sxMap.categoryParentBodyCellSx()}
        />
      </TableRow>

      {project.category.children.map((child, index) => (
        <TableRow
          key={['time-record-page-table-body-row', project.id, project.category.id, child.id, index].join('-')}
          hover
        >
          <TableValueCell value={child.name} sx={sxMap.categoryChildBodyCellSx()} />
          <TimeRecordPageTableBodyRowTimeRecordCells project={project} child={child} sxMap={sxMap} />
        </TableRow>
      ))}
    </>
  );
};
