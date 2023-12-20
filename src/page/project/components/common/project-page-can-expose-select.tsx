import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { MenuItem } from '@mui/material';

import { SelectControl } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { selectFormHook } from '@hook';

export const ProjectPageCanExposeSelect: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const menuItemProps: Array<{ text: string; value: boolean }> = [
    { text: '노출', value: true },
    { text: '숨김', value: false },
  ];

  const onChange = selectFormHook.useOnChangeObjectBooleanProperty(setBody, 'canExpose');

  return (
    <SelectControl label="노출여부" value={body.canExpose === true ? 1 : 0} onChange={onChange}>
      {menuItemProps.map((props, i) => (
        <MenuItem
          key={['project-task-category-menu-item', props.value, i].join('-')}
          value={props.value === true ? 1 : 0}
        >
          {props.text}
        </MenuItem>
      ))}
    </SelectControl>
  );
};
