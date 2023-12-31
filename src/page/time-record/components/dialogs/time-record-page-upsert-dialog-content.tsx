import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { TimeProjectRow, TimeRecordUpsertBody } from '@service';
import { textFieldHook } from '@hook';

export const TimeRecordPageUpsertDialogContent: FunctionComponent<{
  project: TimeProjectRow;
  body: TimeRecordUpsertBody;
  setBody: SetterOrUpdater<TimeRecordUpsertBody>;
}> = ({ project, body, setBody }) => {
  const onChangeTime = textFieldHook.useOnChangeObjectDecimalProperty(setBody, 'time', 2, 2);

  return (
    <>
      <TextField label="사업명" value={project.name} InputProps={{ readOnly: true }} />
      <TextField
        label="시간(단위 : H)"
        value={body.time}
        onChange={onChangeTime}
        FormHelperTextProps={{
          sx: { margin: 0, marginTop: 0.5, textAlign: 'right' },
        }}
      />
    </>
  );
};
