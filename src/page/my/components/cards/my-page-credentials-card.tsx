import { FunctionComponent } from 'react';

import { Button, FormControl, TextField } from '@mui/material';

import { profileStore } from '@store';
import { enumService } from '@service';
import { dialogHook } from '@hook';

import { MyPageCard } from './my-page-card';

export const MyPageCredentialsCard: FunctionComponent = () => {
  const profile = profileStore.useValue();
  const onClick = dialogHook.useMyPageUpdatePasswordDialogCallback(true);

  return (
    <MyPageCard title="계정">
      <FormControl {...{ sx: { flex: 1 } }}>
        <TextField
          {...{
            label: '이메일',
            value: profile.credentials.email,
            InputProps: { readOnly: true },
          }}
        />
        <TextField
          {...{
            label: '역할',
            value: profile.role?.name ?? '없음',
            InputProps: { readOnly: true },
          }}
        />
        <TextField
          {...{
            label: '계정상태',
            value: enumService.credentialsStatusToText(profile.credentials.status),
            InputProps: { readOnly: true },
          }}
        />
      </FormControl>
      <FormControl>
        <Button {...{ onClick, children: '비밀번호 변경' }} />
      </FormControl>
    </MyPageCard>
  );
};
