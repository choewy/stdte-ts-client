import { FunctionComponent } from 'react';

import { Button, FormControl, Paper, TextField, Typography } from '@mui/material';

import { credentialsHook, textFieldHook } from '@hook';

export const SignUpForm: FunctionComponent = () => {
  const [body, setBody] = credentialsHook.useSignUpState();

  const onChangeEmail = textFieldHook.useOnChangeObjectStrProperty('email', setBody);
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);
  const onChangePassword = textFieldHook.useOnChangeObjectStrProperty('password', setBody);
  const onChangeConfirmPassword = textFieldHook.useOnChangeObjectStrProperty('confirmPassword', setBody);
  const onSubmit = credentialsHook.useSignUpCallback(body);

  return (
    <Paper
      {...{
        component: 'form',
        elevation: 3,
        noValidate: true,
        sx: { p: 5, boxSizing: 'border-box', width: 400 },
        onSubmit,
      }}
    >
      <Typography {...{ textAlign: 'center', variant: 'h6', children: '회원가입' }} />
      <FormControl>
        <TextField
          {...{
            type: 'email',
            label: '이메일',
            value: body.email,
            onChange: onChangeEmail,
            required: true,
          }}
        />
        <TextField
          {...{
            type: 'text',
            label: '이름',
            value: body.name,
            onChange: onChangeName,
            required: true,
          }}
        />
        <TextField
          {...{
            type: 'password',
            label: '비밀번호',
            value: body.password,
            onChange: onChangePassword,
            required: true,
          }}
        />
        <TextField
          {...{
            type: 'password',
            label: '비밀번호 확인',
            value: body.confirmPassword,
            onChange: onChangeConfirmPassword,
            required: true,
          }}
        />
      </FormControl>
      <FormControl>
        <Button {...{ type: 'submit', children: '가입요청' }} />
      </FormControl>
    </Paper>
  );
};
