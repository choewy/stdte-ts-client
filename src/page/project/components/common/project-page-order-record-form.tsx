import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { DateInput } from '@component';
import { ProjectRecordCreateBody, ProjectRecordUpdateBody } from '@service';
import { textFieldHook } from '@hook';

export const ProjectPageOrderRecordForm: FunctionComponent<{
  body: ProjectRecordCreateBody | ProjectRecordUpdateBody;
  setBody: SetterOrUpdater<ProjectRecordCreateBody & ProjectRecordUpdateBody>;
}> = ({ body, setBody }) => {
  const onChangeDate = textFieldHook.useOnChangeObjectStrProperty(setBody, 'date');
  const onChangeAmount = textFieldHook.useOnChangeObjectKRWProperty(setBody, 'amount');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(setBody, 'description');

  return (
    <>
      <DateInput {...{ label: '수주일자', value: body.date, onChange: onChangeDate }} />
      <TextField {...{ label: '수주금액', value: body.amount, onChange: onChangeAmount }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
