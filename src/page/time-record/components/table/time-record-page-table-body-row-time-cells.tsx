import { FunctionComponent } from 'react';

import { timeRecordLayoutStore, timeRecordStore } from '@store';
import { TimeRecordProjectRow, TimeRecordProjectRowTaskCategoryChild } from '@service';

import { TImeRecordPageTableBodyRowTimeCell } from './time-record-page-table-body-row-time-cell';
import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';

export const TimeRecordPageTableBodyRowTimeRecordCells: FunctionComponent<{
  project: TimeRecordProjectRow;
  child: TimeRecordProjectRowTaskCategoryChild;
  sxMap: TimeRecordPageTableSxMap;
}> = ({ project, child, sxMap }) => {
  const { date } = timeRecordLayoutStore.useValue();
  const { editable, rows } = timeRecordStore.useValue();

  const records = rows.filter(
    (row) =>
      row.project === project.id && row.category.parent === project.category.id && row.category.child === child.id,
  );

  return (
    <>
      {date.rows.map((date, index) => (
        <TImeRecordPageTableBodyRowTimeCell
          key={[
            'time-record-page-table-body-row-time-cell',
            project.id,
            project.category.id,
            child.id,
            date.date,
            index,
          ].join('-')}
          project={project}
          child={child}
          date={date}
          row={records.find((record) => record.date === date.date)}
          editable={editable}
          sxMap={sxMap}
        />
      ))}
    </>
  );
};
