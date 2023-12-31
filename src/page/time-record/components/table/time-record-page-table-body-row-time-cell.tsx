import { FunctionComponent } from 'react';

import { TableValueCell } from '@component';
import { DateTimeRowProperty, TimeProjectRow, TimeProjectRowTaskCategoryChild, TimeRecordRow } from '@service';
import { dialogHook } from '@hook';

import { TimeRecordPageTableSxMap } from './time-record-page-table-sx-map';

export const TImeRecordPageTableBodyRowTimeCell: FunctionComponent<{
  row: TimeRecordRow | undefined;
  project: TimeProjectRow;
  child: TimeProjectRowTaskCategoryChild;
  date: DateTimeRowProperty;
  sxMap: TimeRecordPageTableSxMap;
  editable: boolean;
}> = ({ project, child, date, row, editable, sxMap }) => {
  const time = row?.time ?? '0';
  const onClick = dialogHook.useTimeRecordDialog('upsert', true, row, project, child, date);

  return (
    <TableValueCell
      value={Number(time) > 0 ? time : ''}
      onClick={editable === true ? onClick : undefined}
      sx={sxMap.defaultCellSx({
        color: date.color,
        cursor: editable === true ? 'pointer' : 'default',
      })}
    />
  );
};
