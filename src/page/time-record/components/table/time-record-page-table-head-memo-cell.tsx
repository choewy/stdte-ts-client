import { FunctionComponent } from 'react';

import { Button, TableCell } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

import { TimeMemoRow } from '@service';
import { timeMemoHook } from '@hook';

export const TimeRecordPageTableHeadMemoCell: FunctionComponent<{
  stickyRow: number;
  editable: boolean;
  id: number;
  date: string;
  text: string;
  updatedAt: string;
}> = ({ stickyRow, editable, id, date, text, updatedAt }) => {
  const row: TimeMemoRow = { id, date, text, updatedAt };
  const onClick = timeMemoHook.useDialogCallback('upsert', true, row);

  return (
    <TableCell sx={{ padding: 0, margin: 0 }}>
      <Button
        variant="text"
        sx={{ padding: 0, height: (stickyRow + 1) * 36.57 }}
        disabled={editable === false && id === 0}
        onClick={onClick}
      >
        {id > 0 && <FiberManualRecord sx={{ fontSize: 10 }} />}
      </Button>
    </TableCell>
  );
};
