import { FunctionComponent, useCallback } from 'react';

import { TableValueCell } from '@component';
import { DateTimeRowProperty, TimeRecordProjectRow, TimeRecordProjectRowTaskCategoryChild } from '@service';

export const TImeRecordPageTableBodyRowTimeCell: FunctionComponent<{
  project: TimeRecordProjectRow;
  child: TimeRecordProjectRowTaskCategoryChild;
  date: DateTimeRowProperty;
  time: string;
  editable: boolean;
}> = ({ project, child, date, time, editable }) => {
  const onClick = useCallback(() => {
    if (editable === false) {
      return;
    }
  }, [project, child, date, time, editable]);

  return (
    <TableValueCell
      value={time}
      onClick={onClick}
      sx={{
        color: date.color,
        cursor: editable === true ? 'pointer' : 'default',
      }}
    />
  );
};
