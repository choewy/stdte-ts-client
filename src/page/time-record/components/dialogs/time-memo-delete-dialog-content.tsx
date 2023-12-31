import { FunctionComponent } from 'react';

import { DialogContentText } from '@mui/material';

import { TimeMemoRow, datetimeService } from '@service';

export const TimeMemoDeleteDialogContent: FunctionComponent<{
  row: TimeMemoRow;
}> = ({ row }) => {
  const date = datetimeService.getDateTimeRow(row.date);

  return (
    <DialogContentText>
      {date.date}({date.weekday}) 메모가 삭제되며, 삭제된 데이터는 복구할 수 없습니다.
      <br />
      정말 삭제하시겠습니까?
    </DialogContentText>
  );
};
