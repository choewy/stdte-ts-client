import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { MenuItem } from '@mui/material';

import { SelectControl } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { selectStore } from '@store';
import { selectFormHook, selectHook } from '@hook';

export const ProjectPageBusinessCategorySelect: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const { category } = selectStore.useValue();

  selectHook.useMountCategory('businesses');
  selectHook.useUnMountCategory('businesses');

  const onChange = selectFormHook.useOnChangeObjectProperty(setBody, 'businessCategory');

  return (
    <SelectControl
      label="사업구분"
      value={body.businessCategory === 0 ? undefined : body.businessCategory}
      onChange={onChange}
    >
      {category.businesses.list.rows.map((row, i) => (
        <MenuItem key={['project-business-category-menu-item', row.id, i].join('-')} value={row.id}>
          {row.name}
        </MenuItem>
      ))}
    </SelectControl>
  );
};
