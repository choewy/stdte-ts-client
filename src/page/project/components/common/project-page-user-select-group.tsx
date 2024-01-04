import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Checkbox, ListItemText, MenuItem, Typography } from '@mui/material';

import { SelectControl } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { selectStore } from '@store';
import { selectFormHook, selectHook } from '@hook';

export const ProjectPageUserSelectGroup: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const { users } = selectStore.useValue();

  selectHook.useMountUser();
  selectHook.useUnMountUser();

  const onChangeExternalManagers = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'externalManagers');
  const onChangeInternalManagers = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'internalManagers');
  const onChangeInternalLeaders = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'internalLeaders');

  return (
    <>
      <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
        담당자
      </Typography>
      <SelectControl
        label="PM(용수계)"
        multiple
        value={body.externalManagers}
        onChange={onChangeExternalManagers}
        renderValue={(ids) =>
          users.list.rows
            .filter(({ id }) => ids.includes(id))
            .map(({ name }) => name)
            .join(', ')
        }
      >
        {users.list.rows.map((user, i) => (
          <MenuItem key={['project-external-pm-menu-item', user.id, i].join('-')} value={user.id}>
            <Checkbox
              edge="start"
              size="small"
              tabIndex={-1}
              disableRipple
              checked={body.externalManagers.indexOf(user.id) > -1}
            />
            <ListItemText
              primary={user.name}
              primaryTypographyProps={{
                sx: { fontSize: '12px' },
              }}
            />
          </MenuItem>
        ))}
      </SelectControl>
      <SelectControl
        label="PM(실제)"
        multiple
        value={body.internalManagers}
        onChange={onChangeInternalManagers}
        renderValue={(ids) =>
          users.list.rows
            .filter(({ id }) => ids.includes(id))
            .map(({ name }) => name)
            .join(', ')
        }
      >
        {users.list.rows.map((user, i) => (
          <MenuItem key={['project-internal-pm-menu-item', user.id, i].join('-')} value={user.id}>
            <Checkbox
              edge="start"
              size="small"
              tabIndex={-1}
              disableRipple
              checked={body.internalManagers.indexOf(user.id) > -1}
            />
            <ListItemText
              primary={user.name}
              primaryTypographyProps={{
                sx: { fontSize: '12px' },
              }}
            />
          </MenuItem>
        ))}
      </SelectControl>
      <SelectControl
        label="PL"
        multiple
        value={body.internalLeaders}
        onChange={onChangeInternalLeaders}
        renderValue={(ids) =>
          users.list.rows
            .filter(({ id }) => ids.includes(id))
            .map(({ name }) => name)
            .join(', ')
        }
      >
        {users.list.rows.map((user, i) => (
          <MenuItem key={['project-internal-pl-menu-item', user.id, i].join('-')} value={user.id}>
            <Checkbox
              edge="start"
              size="small"
              tabIndex={-1}
              disableRipple
              checked={body.internalLeaders.indexOf(user.id) > -1}
            />
            <ListItemText
              primary={user.name}
              primaryTypographyProps={{
                sx: { fontSize: '12px' },
              }}
            />
          </MenuItem>
        ))}
      </SelectControl>
    </>
  );
};
