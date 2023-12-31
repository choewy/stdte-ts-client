import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';

import { ListItem, ListItemButton, ListItemText } from '@mui/material';

import { TimeMemoRow, datetimeService } from '@service';
import { timeMemoHook } from '@hook';

export const TimeRecordPageTabMemoListItem: FunctionComponent<{
  row: TimeMemoRow;
}> = ({ row }) => {
  const datetime = datetimeService.getDateTimeRow(row.date);
  const onClick = timeMemoHook.useDialogCallback('upsert', true, row);

  return (
    <ListItem sx={{ padding: 0 }}>
      <ListItemButton onClick={onClick}>
        <ListItemText
          primary={`${datetime.date}(${datetime.weekday})`}
          secondary={DateTime.fromISO(row.updatedAt).toFormat('yyyy-MM-dd HH:mm:ss')}
          sx={{ paddingX: 3 }}
          primaryTypographyProps={{ sx: { fontSize: 12 } }}
          secondaryTypographyProps={{ sx: { fontSize: 12 } }}
        />
      </ListItemButton>
    </ListItem>
  );
};
