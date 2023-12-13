import { FunctionComponent } from 'react';

import { Button, FormControl, Paper, TextField, Typography } from '@mui/material';

import { credentialsHook, textFieldHook } from '@hook';
import { SignProps } from '@props';

export const SignUpForm: FunctionComponent = () => {
  const [body, setBody] = credentialsHook.useSignUpState();

  const onChangeEmail = textFieldHook.useOnChangeObjectStrProperty('email', setBody);
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);
  const onChangePassword = textFieldHook.useOnChangeObjectStrProperty('password', setBody);
  const onChangeConfirmPassword = textFieldHook.useOnChangeObjectStrProperty('confirmPassword', setBody);
  const onSubmit = credentialsHook.useSignUpCallback(body);

  return (
    <Paper {...SignProps.paper({ onSubmit })}>
      <Typography {...SignProps.typography({ children: '회원가입' })} />
      <FormControl {...SignProps.formControl({})}>
        <TextField
          {...SignProps.textField({
            type: 'email',
            label: '이메일',
            value: body.email,
            onChange: onChangeEmail,
          })}
        />{' '}
        <TextField
          {...SignProps.textField({
            type: 'text',
            label: '이름',
            value: body.name,
            onChange: onChangeName,
          })}
        />
        <TextField
          {...SignProps.textField({
            type: 'password',
            label: '비밀번호',
            value: body.password,
            onChange: onChangePassword,
          })}
        />
        <TextField
          {...SignProps.textField({
            type: 'password',
            label: '비밀번호 확인',
            value: body.confirmPassword,
            onChange: onChangeConfirmPassword,
          })}
        />
      </FormControl>
      <FormControl {...SignProps.formControl({})}>
        <Button {...SignProps.button({ children: '가입요청' })} />
      </FormControl>
    </Paper>
  );
};
