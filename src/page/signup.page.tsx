import { FunctionComponent } from 'react';

import { Box, Button, TextField } from '@mui/material';

import { PageContainer } from '@component';
import { ButtonAttributes, SignStyle, TextFieldAttributes } from '@common';
import { AuthHook, TextFieldHook } from '@hook';

export const SignUpPage: FunctionComponent = () => {
  const [body, setBody] = AuthHook.getInstance().useSignUpState();

  return (
    <PageContainer maxWidth="xs" sx={SignStyle.Container}>
      <Box sx={SignStyle.Wrapper}>
        <Box component="form" noValidate onSubmit={AuthHook.getInstance().useSignUp(body)}>
          <TextField
            {...TextFieldAttributes.Sign}
            type="email"
            name="email"
            label="이메일"
            value={body.email}
            onChange={TextFieldHook.getInstance().useOnChangeText(setBody)}
          />
          <TextField
            {...TextFieldAttributes.Sign}
            type="text"
            name="name"
            label="이름"
            value={body.name}
            onChange={TextFieldHook.getInstance().useOnChangeText(setBody)}
          />
          <TextField
            {...TextFieldAttributes.Sign}
            type="password"
            name="password"
            label="비밀번호"
            value={body.password}
            onChange={TextFieldHook.getInstance().useOnChangeText(setBody)}
          />
          <TextField
            {...TextFieldAttributes.Sign}
            type="password"
            name="confirmPassword"
            label="비밀번호 확인"
            value={body.confirmPassword}
            onChange={TextFieldHook.getInstance().useOnChangeText(setBody)}
          />
          <Button {...ButtonAttributes.Sign} sx={SignStyle.Button}>
            회원가입
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};
