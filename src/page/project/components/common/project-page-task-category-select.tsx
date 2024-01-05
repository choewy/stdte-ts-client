import { FunctionComponent, useEffect } from 'react';
import { SetterOrUpdater } from 'recoil';

import { MenuItem } from '@mui/material';

import { SelectControl } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { selectStore } from '@store';
import { selectFormHook, selectHook } from '@hook';

export const ProjectPageTaskCategorySelect: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
  isCreateMode?: boolean;
}> = ({ body, setBody, isCreateMode }) => {
  const { category } = selectStore.useValue();

  selectHook.useMountCategory('tasks');
  selectHook.useUnMountCategory('tasks');

  const onChange = selectFormHook.useOnChangeObjectProperty(setBody, 'taskCategory');

  useEffect(() => {
    if (isCreateMode) {
      const taskCategory = category.tasks.list.rows.find((taskCategory) => taskCategory.isDefault)?.id;

      if (taskCategory == null) {
        return;
      }

      setBody((prev) => ({ ...prev, taskCategory }));
    }
  }, [isCreateMode, category.tasks.list.rows, setBody]);

  return (
    <SelectControl label="수행업무구분" value={body.taskCategory === 0 ? '' : body.taskCategory} onChange={onChange}>
      {category.tasks.list.rows.map((row, i) => (
        <MenuItem key={['project-task-category-menu-item', row.id, i].join('-')} value={row.id}>
          {row.name}
        </MenuItem>
      ))}
    </SelectControl>
  );
};
