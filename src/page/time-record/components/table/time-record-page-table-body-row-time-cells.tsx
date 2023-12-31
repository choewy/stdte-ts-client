import { FunctionComponent } from 'react';

import { timeLayoutStore, timeRecordStore } from '@store';
import { TimeProjectRow, TimeProjectRowTaskCategoryChild } from '@service';

import { TImeRecordPageTableBodyRowTimeCell } from './time-record-page-table-body-row-time-cell';
import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';

export const TimeRecordPageTableBodyRowTimeRecordCells: FunctionComponent<{
  project: TimeProjectRow;
  child: TimeProjectRowTaskCategoryChild;
  sxMap: TimeRecordPageTableSxMap;
}> = ({ project, child, sxMap }) => {
  const { editable, date } = timeLayoutStore.useValue();
  const { rows } = timeRecordStore.useValue();

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
