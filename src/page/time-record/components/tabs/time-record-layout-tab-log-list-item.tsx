import { DateTime } from 'luxon';
import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ListItem, ListItemButton, ListItemText } from '@mui/material';

import { PagePath } from '@common';
import { TimeRecordLogRow } from '@service';

export const TimeRecordPageTabLogListItem: FunctionComponent<{
  row: TimeRecordLogRow;
  selected: boolean;
}> = ({ row, selected }) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate([PagePath.TimeRecord, row.id].join('/'));
  }, [row.id, navigate]);

  return (
    <ListItem sx={{ padding: 0 }}>
      <ListItemButton onClick={onClick} selected={selected}>
        <ListItemText
          primary={row.name}
          secondary={DateTime.fromISO(row.updatedAt).toFormat('yyyy-MM-dd HH:mm:ss')}
          sx={{ paddingX: 3 }}
          primaryTypographyProps={{ sx: { fontSize: 12 } }}
          secondaryTypographyProps={{ sx: { fontSize: 12 } }}
        />
      </ListItemButton>
    </ListItem>
  );
};
