import { SetterOrUpdater } from 'recoil';

import { MenuItem } from '@mui/material';

import { ROLE_POLICY_EDITABLE_VALUES, RolePolicyKey, RolePolicyProperty } from '@common';
import { SelectControl } from '@component';
import { enumService } from '@service';
import { selectFormHook } from '@hook';

export function RolePageRolePolicySelectGroup<D extends { rolePolicy: RolePolicyProperty }>({
  rolePolicyKey,
  body,
  setBody,
}: {
  rolePolicyKey: RolePolicyKey;
  body: D;
  setBody: SetterOrUpdater<D>;
}) {
  const onChange = selectFormHook.useOnChangeRolePolicyProperty(rolePolicyKey, setBody);

  return (
    <SelectControl
      key={['role-page-role-policy-select', rolePolicyKey].join('-')}
      label={enumService.rolePolicyKeyToText(rolePolicyKey)}
      value={body.rolePolicy[rolePolicyKey]}
      onChange={onChange}
    >
      {ROLE_POLICY_EDITABLE_VALUES.map((level, i) => (
        <MenuItem
          {...{
            key: ['role-page-role-policy-select', rolePolicyKey, level, i].join('-'),
            value: level,
            children: enumService.rolePolicyLevelToText(level),
          }}
        />
      ))}
    </SelectControl>
  );
}
