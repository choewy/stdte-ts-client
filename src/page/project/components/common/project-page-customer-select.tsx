import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { MenuItem } from '@mui/material';

import { SelectControl } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { selectStore } from '@store';
import { selectFormHook, selectHook } from '@hook';

export const ProjectPageCustomerSelect: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const { customers } = selectStore.useValue();

  selectHook.useMountCustomer();
  selectHook.useUnMountCustomer();

  const onChange = selectFormHook.useOnChangeObjectProperty(setBody, 'customer');

  return (
    <SelectControl label="고객사" value={body.customer === 0 ? undefined : body.customer} onChange={onChange}>
      {customers.list.rows.map((row, i) => (
        <MenuItem key={['project-customer-menu-item', row.id, i].join('-')} value={row.id}>
          {row.name}
        </MenuItem>
      ))}
    </SelectControl>
  );
};
