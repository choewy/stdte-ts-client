import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, TextField } from '@mui/material';

import { ROLE_POLICY_KEY } from '@common';
import { RoleCreateBody } from '@service';
import { textFieldHook } from '@hook';

import { RolePageRolePolicySelectGroup } from './role-page-role-policy-select-group';

export const RolePageCreateDialogContent: FunctionComponent<{
  body: RoleCreateBody;
  setBody: SetterOrUpdater<RoleCreateBody>;
}> = ({ body, setBody }) => {
  const length = ROLE_POLICY_KEY.length;
  const half = Math.ceil(length / 2);

  const left = ROLE_POLICY_KEY.slice(0, half);
  const right = ROLE_POLICY_KEY.slice(half, length);

  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);

  return (
    <>
      <TextField
        {...{
          type: 'text',
          label: '역할명',
          value: body.name,
          onChange: onChangeName,
        }}
      />
      <Box sx={{ display: 'flex', gap: 1, borderTop: 0.5, marginTop: 2, paddingTop: 2 }}>
        <Box sx={{ flex: 1 }}>
          {left.map((rolePolicyKey, i) => (
            <RolePageRolePolicySelectGroup
              {...{
                key: ['role-page-role-policy-select-left', rolePolicyKey, i].join('-'),
                rolePolicyKey,
                body,
                setBody,
              }}
            />
          ))}
        </Box>
        <Box sx={{ flex: 1 }}>
          {right.map((rolePolicyKey, i) => (
            <RolePageRolePolicySelectGroup
              {...{
                key: ['role-page-role-policy-select-right', rolePolicyKey, i].join('-'),
                rolePolicyKey,
                body,
                setBody,
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
