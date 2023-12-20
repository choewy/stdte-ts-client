import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { TaskCategoryCreateBody } from '@service';
import { textFieldHook } from '@hook';

export const TaskCategoryPageCreateDialogContent: FunctionComponent<{
  body: TaskCategoryCreateBody;
  setBody: SetterOrUpdater<TaskCategoryCreateBody>;
}> = ({ body, setBody }) => {
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty(setBody, 'name');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(setBody, 'description');

  return (
    <>
      <TextField {...{ label: '대분류명', value: body.name, onChange: onChangeName }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
