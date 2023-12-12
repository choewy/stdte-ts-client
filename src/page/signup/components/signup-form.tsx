import { FunctionComponent } from 'react';

import { Box, Button, ButtonProps, TextField, TextFieldProps } from '@mui/material';

import { credentialsHook, textFieldHook } from '@hook';

const textFieldProps = (args: Pick<TextFieldProps, 'type' | 'label' | 'value' | 'onChange'>): TextFieldProps => ({
  autoComplete: 'off',
  required: true,
  fullWidth: true,
  margin: 'normal',
  ...args,
});

const buttonProps = (): ButtonProps => ({
  type: 'submit',
  fullWidth: true,
  variant: 'contained',
  sx: { mt: 3, mb: 2 },
  children: '로그인',
});

export const SignUpForm: FunctionComponent = () => {
  const [body, setBody] = credentialsHook.useSignUpState();

  const onSignUp = credentialsHook.useSignUpCallback(body);
  const onChangeEmail = textFieldHook.useOnChangeObjectStrProperty('email', setBody);
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);
  const onChangePassword = textFieldHook.useOnChangeObjectStrProperty('password', setBody);
  const onChangeConfirmPassword = textFieldHook.useOnChangeObjectStrProperty('confirmPassword', setBody);

  return (
    <Box component="form" noValidate onSubmit={onSignUp}>
      <TextField
        {...textFieldProps({
          type: 'email',
          label: '이메일',
          value: body.email,
          onChange: onChangeEmail,
        })}
      />{' '}
      <TextField
        {...textFieldProps({
          type: 'text',
          label: '이름',
          value: body.name,
          onChange: onChangeName,
        })}
      />
      <TextField
        {...textFieldProps({
          type: 'password',
          label: '비밀번호',
          value: body.password,
          onChange: onChangePassword,
        })}
      />
      <TextField
        {...textFieldProps({
          type: 'password',
          label: '비밀번호 확인',
          value: body.confirmPassword,
          onChange: onChangeConfirmPassword,
        })}
      />
      <Button {...buttonProps()} />
    </Box>
  );
};
