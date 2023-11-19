import { FunctionComponent } from 'react';

import { Box, Button, TextField } from '@mui/material';

import { PageContainer } from '@component';
import { ButtonAttributes, SignStyle, TextFieldAttributes } from '@common';
import { textFieldHook, authHook } from '@hook';

const SignInPage: FunctionComponent = () => {
  const [body, setBody] = authHook.useSignInState();

  return (
    <PageContainer maxWidth="xs" sx={SignStyle.Container}>
      <Box sx={SignStyle.Wrapper}>
        <Box component="form" noValidate onSubmit={authHook.useSignIn(body)}>
          <TextField
            {...TextFieldAttributes.Sign}
            type="email"
            name="email"
            label="이메일"
            value={body.email}
            onChange={textFieldHook.useOnChangeText(setBody)}
          />
          <TextField
            {...TextFieldAttributes.Sign}
            type="password"
            name="password"
            label="비밀번호"
            value={body.password}
            onChange={textFieldHook.useOnChangeText(setBody)}
          />
          <Button {...ButtonAttributes.Sign} sx={SignStyle.Button}>
            로그인
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default SignInPage;
