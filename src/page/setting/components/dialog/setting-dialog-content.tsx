import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, TextField } from '@mui/material';

import { SettingUpdateBody } from '@service';
import { textFieldHook } from '@hook';

export const SettingDialogContent: FunctionComponent<{
  body: SettingUpdateBody;
  setBody: SetterOrUpdater<SettingUpdateBody>;
}> = ({ body, setBody }) => {
  const onChange = textFieldHook.useOnChangeObjectStrProperty(setBody, 'difficultyTooltip');

  return (
    <Box>
      <TextField
        multiline
        minRows={15}
        maxRows={15}
        value={body.difficultyTooltip}
        onChange={onChange}
        placeholder="내용을 입력하세요."
      />
    </Box>
  );
};
