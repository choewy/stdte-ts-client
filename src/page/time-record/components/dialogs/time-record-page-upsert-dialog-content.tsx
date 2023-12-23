import { DateTime } from 'luxon';
import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { TimeRecordProjectRow, TimeRecordRow, TimeRecordUpsertBody } from '@service';
import { textFieldHook } from '@hook';

export const TimeRecordPageUpsertDialogContent: FunctionComponent<{
  row: TimeRecordRow;
  project: TimeRecordProjectRow;
  body: TimeRecordUpsertBody;
  setBody: SetterOrUpdater<TimeRecordUpsertBody>;
}> = ({ row, project, body, setBody }) => {
  let updatedAt: DateTime;

  if (row.updatedAt === '') {
    updatedAt = DateTime.local();
  } else {
    updatedAt = DateTime.fromISO(row.updatedAt);
  }

  const onChangeTime = textFieldHook.useOnChangeObjectDecimalProperty(setBody, 'time', 2, 2);

  return (
    <>
      <TextField label="사업명" value={project.name} InputProps={{ readOnly: true }} />
      <TextField
        label="시간(단위 : H)"
        value={body.time}
        onChange={onChangeTime}
        helperText={['마지막 수정일시', updatedAt.toFormat('yyyy-MM-dd HH:mm:ss')].join(' : ')}
        FormHelperTextProps={{
          sx: { margin: 0, marginTop: 0.5, textAlign: 'right' },
        }}
      />
    </>
  );
};
