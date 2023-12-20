import { FunctionComponent } from 'react';

import { Button, FormControl, Paper, TextField, Typography } from '@mui/material';

import { credentialsHook, textFieldHook } from '@hook';

export const SignInForm: FunctionComponent = () => {
  const [body, setBody] = credentialsHook.useSignInState();

  const onChangeEmail = textFieldHook.useOnChangeObjectStrProperty(setBody, 'email');
  const onChangePassword = textFieldHook.useOnChangeObjectStrProperty(setBody, 'password');
  const onSubmit = credentialsHook.useSignInCallback(body);

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
      <Typography {...{ textAlign: 'center', variant: 'h6', children: '로그인' }} />
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
            type: 'password',
            label: '비밀번호',
            value: body.password,
            onChange: onChangePassword,
            required: true,
          }}
        />
      </FormControl>
      <FormControl>
        <Button {...{ type: 'submit', children: '로그인' }} />
      </FormControl>
    </Paper>
  );
};
