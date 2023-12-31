import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, TextField } from '@mui/material';

import { TimeMemoUpsertBody } from '@service';
import { textFieldHook } from '@hook';

export const TimeMemoUpsertDialogContent: FunctionComponent<{
  editable: boolean;
  updatedAt: string;
  body: TimeMemoUpsertBody;
  setBody: SetterOrUpdater<TimeMemoUpsertBody>;
}> = ({ editable, updatedAt, body, setBody }) => {
  const onChange = textFieldHook.useOnChangeObjectStrProperty(setBody, 'text');

  return (
    <Box>
      <TextField
        multiline
        minRows={15}
        maxRows={15}
        InputProps={{ readOnly: editable === false, sx: { fontSize: 12 } }}
        value={body.text}
        onChange={onChange}
        helperText={
          updatedAt
            ? `마지막 수정일시 : ${DateTime.fromJSDate(new Date(updatedAt)).toFormat('yyyy-MM-dd HH:mm:ss')}`
            : ''
        }
        FormHelperTextProps={{ sx: { textAlign: 'right', margin: 0, marginTop: 1 } }}
      />
    </Box>
  );
};
