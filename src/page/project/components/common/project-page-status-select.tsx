import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { MenuItem } from '@mui/material';

import { SelectControl } from '@component';
import { ProjectCreateBody, ProjectUpdateBody, enumService } from '@service';
import { selectFormHook } from '@hook';

export const ProjectPageStatusSelect: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const menuItemProps = enumService.projectStatusSelectMenuItemProps();
  const onChange = selectFormHook.useOnChangeObjectProperty('status', setBody);

  return (
    <SelectControl label="상태" value={body.status} onChange={onChange}>
      {menuItemProps.map((props, i) => (
        <MenuItem key={['project-status-menu-item', props.value, i].join('-')} {...props} />
      ))}
    </SelectControl>
  );
};
