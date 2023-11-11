import { FunctionComponent } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';

import { PageContainer } from '@component';
import { PageName, SignStyle } from '@common';
import { AuthHook, TextFieldHook } from '@hook';

export const SignInPage: FunctionComponent = () => {
  const [body, setBody] = AuthHook.getInstance().useSignInState();

  return (
    <PageContainer maxWidth="xs">
      <Box sx={SignStyle.Wrapper}>
        <Typography component="h1" variant="h5">
          {PageName.SignIn}
        </Typography>
        <Box component="form" noValidate onSubmit={AuthHook.getInstance().useSignIn(body)}>
          <TextField
            required
            fullWidth
            type="email"
            name="email"
            label="이메일"
            margin="normal"
            value={body.email}
            onChange={TextFieldHook.getInstance().useOnChangeText(setBody)}
          />{' '}
          <TextField
            required
            fullWidth
            type="password"
            name="password"
            label="비밀번호"
            margin="normal"
            value={body.password}
            onChange={TextFieldHook.getInstance().useOnChangeText(setBody)}
          />
          <Button type="submit" fullWidth variant="contained" sx={SignStyle.Button}>
            로그인
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};
