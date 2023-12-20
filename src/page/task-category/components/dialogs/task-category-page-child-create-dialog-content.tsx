import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { TaskCategoryCreateChildBody } from '@service';
import { textFieldHook } from '@hook';

export const TaskCategoryPageChildCreateDialogContent: FunctionComponent<{
  body: TaskCategoryCreateChildBody;
  setBody: SetterOrUpdater<TaskCategoryCreateChildBody>;
}> = ({ body, setBody }) => {
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty(setBody, 'name');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(setBody, 'description');

  return (
    <>
      <TextField {...{ label: '소분류명', value: body.name, onChange: onChangeName }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
