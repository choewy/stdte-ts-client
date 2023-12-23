import { FunctionComponent } from 'react';

import { TableValueCell } from '@component';
import {
  DateTimeRowProperty,
  TimeRecordProjectRow,
  TimeRecordProjectRowTaskCategoryChild,
  TimeRecordRow,
} from '@service';
import { dialogHook } from '@hook';

export const TImeRecordPageTableBodyRowTimeCell: FunctionComponent<{
  row: TimeRecordRow | undefined;
  project: TimeRecordProjectRow;
  child: TimeRecordProjectRowTaskCategoryChild;
  date: DateTimeRowProperty;
  editable: boolean;
}> = ({ project, child, date, row, editable }) => {
  const onClick = dialogHook.useTimeRecordDialog('upsert', true, row, project, child, date);

  return (
    <TableValueCell
      value={row?.time ?? ''}
      onClick={editable === true ? onClick : undefined}
      sx={{
        color: date.color,
        cursor: editable === true ? 'pointer' : 'default',
      }}
    />
  );
};
