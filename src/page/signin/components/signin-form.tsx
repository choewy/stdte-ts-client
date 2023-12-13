import { FunctionComponent } from 'react';

import { Button, FormControl, Paper, TextField, Typography } from '@mui/material';

import { credentialsHook, textFieldHook } from '@hook';
import { SignProps } from '@props';

export const SignInForm: FunctionComponent = () => {
  const [body, setBody] = credentialsHook.useSignInState();

  const onChangeEmail = textFieldHook.useOnChangeObjectStrProperty('email', setBody);
  const onChangePassword = textFieldHook.useOnChangeObjectStrProperty('password', setBody);
  const onSubmit = credentialsHook.useSignInCallback(body);

  return (
    <Paper {...SignProps.paper({ onSubmit })}>
      <Typography {...SignProps.typography({ children: '로그인' })} />
      <FormControl {...SignProps.formControl({})}>
        <TextField
          {...SignProps.textField({
            type: 'email',
            label: '이메일',
            value: body.email,
            onChange: onChangeEmail,
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
      </FormControl>
      <FormControl {...SignProps.formControl({})}>
        <Button {...SignProps.button({ children: '로그인' })} />
      </FormControl>
    </Paper>
  );
};
