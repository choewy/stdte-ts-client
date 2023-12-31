import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { TimeMemoRow, TimeMemoUpsertBody } from '@service';
import { timeMemoHook } from '@hook';

export const TimeMemoUpsertDialogAction: FunctionComponent<{
  editable: boolean;
  row: TimeMemoRow;
  body: TimeMemoUpsertBody;
  onClose: () => void;
}> = ({ editable, row, body, onClose }) => {
  const callback = timeMemoHook.useUpsertCallback(body);
  const onClickUpsert = useCallback(async () => {
    if (await callback()) {
      onClose();
    }
  }, [onClose]);

  const onClickDelete = timeMemoHook.useDialogCallback('delete', true, row);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        {editable && Number(row.id) > 0 && (
          <Button {...{ variant: 'text', children: '삭제', onClick: onClickDelete }} />
        )}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        {editable && (
          <Button
            {...{ variant: 'text', children: '저장', disabled: row.text === body.text, onClick: onClickUpsert }}
          />
        )}
        <Button {...{ variant: 'text', children: '닫기', onClick: onClose }} />
      </Box>
    </Box>
  );
};
