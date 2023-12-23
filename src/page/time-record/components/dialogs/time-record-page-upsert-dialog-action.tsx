import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { TimeRecordUpsertBody } from '@service';
import { buttonHook, timeRecordHook } from '@hook';

export const TimeRecordPageUpsertDialogAction: FunctionComponent<{
  origin: TimeRecordUpsertBody;
  body: TimeRecordUpsertBody;
  onClose: () => void;
}> = ({ origin, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(origin, body);
  const callback = timeRecordHook.useUpsertCallback(body);
  const onClick = useCallback(async () => {
    const ok = await callback();

    if (ok) {
      onClose();
    }
  }, [callback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '저장', variant: 'text', onClick, disabled }} />
      <Button {...{ children: '닫기', variant: 'text', onClick: onClose }} />
    </Box>
  );
};
