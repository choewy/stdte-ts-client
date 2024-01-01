import { FunctionComponent, useCallback } from 'react';

import { Box, Button } from '@mui/material';

import { SettingRow, SettingUpdateBody } from '@service';
import { buttonHook, settingHook } from '@hook';

export const SettingDialogAction: FunctionComponent<{
  row: SettingRow;
  body: SettingUpdateBody;
  onClose: () => void;
}> = ({ row, body, onClose }) => {
  const disabled = buttonHook.useDisabledByObject(row, body);
  const callback = settingHook.useUpdateCallback(body);
  const onClick = useCallback(async () => {
    if (await callback()) {
      onClose();
    }
  }, [callback, onClose]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button {...{ children: '저장', variant: 'text', onClick, disabled }} />
      <Button {...{ children: '취소', variant: 'text', onClick: onClose, autoFocus: true }} />
    </Box>
  );
};
