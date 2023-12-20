import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { DateInput } from '@component';
import { ProjectRecordCreateBody, ProjectRecordUpdateBody } from '@service';
import { textFieldHook } from '@hook';

export const ProjectPageOrderRecordForm: FunctionComponent<
  | {
      body: ProjectRecordCreateBody;
      setBody: SetterOrUpdater<ProjectRecordCreateBody>;
    }
  | {
      body: ProjectRecordUpdateBody;
      setBody: SetterOrUpdater<ProjectRecordUpdateBody>;
    }
> = ({ body, setBody }) => {
  const onChangeDate = textFieldHook.useOnChangeObjectKRWProperty(
    setBody as SetterOrUpdater<ProjectRecordCreateBody & ProjectRecordUpdateBody>,
    'date',
  );

  const onChangeAmount = textFieldHook.useOnChangeObjectKRWProperty(
    setBody as SetterOrUpdater<ProjectRecordCreateBody & ProjectRecordUpdateBody>,
    'amount',
  );

  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(
    setBody as SetterOrUpdater<ProjectRecordCreateBody & ProjectRecordUpdateBody>,
    'description',
  );

  return (
    <>
      <DateInput {...{ label: '수주일자', value: body.date, onChange: onChangeDate }} />
      <TextField {...{ label: '수주금액', value: body.amount, onChange: onChangeAmount }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
