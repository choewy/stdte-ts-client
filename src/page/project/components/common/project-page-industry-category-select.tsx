import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { MenuItem } from '@mui/material';

import { SelectControl } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { selectStore } from '@store';
import { selectFormHook, selectHook } from '@hook';

export const ProjectPageIndustryCategorySelect: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const { category } = selectStore.useValue();

  selectHook.useMountCategory('industries');
  selectHook.useUnMountCategory('industries');

  const onChange = selectFormHook.useOnChangeObjectProperty(setBody, 'industryCategory');

  return (
    <SelectControl
      label="산업분야"
      value={body.industryCategory === 0 ? '' : body.industryCategory}
      onChange={onChange}
    >
      {category.industries.list.rows.map((row, i) => (
        <MenuItem key={['project-industry-category-menu-item', row.id, i].join('-')} value={row.id}>
          {row.name}
        </MenuItem>
      ))}
    </SelectControl>
  );
};
