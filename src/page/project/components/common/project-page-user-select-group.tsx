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

  const onChangeExternalOwners = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'externalOwners');
  const onChangeExternalManagers = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'externalManagers');
  const onChangeExternalLeaders = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'externalLeaders');
  const onChangeInternalOwners = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'internalOwners');
  const onChangeInternalManagers = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'internalManagers');
  const onChangeInternalLeaders = selectFormHook.useOnChangeObjectArrayProperty(setBody, 'internalLeaders');

  return (
    <>
      <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
        담당자(대외)
      </Typography>
      <SelectControl
        label="PO(대외)"
        multiple
        value={body.externalOwners}
        onChange={onChangeExternalOwners}
        renderValue={(ids) =>
          users.list.rows
            .filter(({ id }) => ids.includes(id))
            .map(({ name }) => name)
            .join(', ')
        }
      >
        {users.list.rows.map((user, i) => (
          <MenuItem key={['project-external-po-menu-item', user.id, i].join('-')} value={user.id}>
            <Checkbox
              edge="start"
              size="small"
              tabIndex={-1}
              disableRipple
              checked={body.externalOwners.indexOf(user.id) > -1}
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
        label="PM(대외)"
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
        label="PL(대외)"
        multiple
        value={body.externalLeaders}
        onChange={onChangeExternalLeaders}
        renderValue={(ids) =>
          users.list.rows
            .filter(({ id }) => ids.includes(id))
            .map(({ name }) => name)
            .join(', ')
        }
      >
        {users.list.rows.map((user, i) => (
          <MenuItem key={['project-external-pl-menu-item', user.id, i].join('-')} value={user.id}>
            <Checkbox
              edge="start"
              size="small"
              tabIndex={-1}
              disableRipple
              checked={body.externalLeaders.indexOf(user.id) > -1}
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
      <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
        담당자(대내)
      </Typography>
      <SelectControl
        label="PO(대내)"
        multiple
        value={body.internalOwners}
        onChange={onChangeInternalOwners}
        renderValue={(ids) =>
          users.list.rows
            .filter(({ id }) => ids.includes(id))
            .map(({ name }) => name)
            .join(', ')
        }
      >
        {users.list.rows.map((user, i) => (
          <MenuItem key={['project-internal-po-menu-item', user.id, i].join('-')} value={user.id}>
            <Checkbox
              edge="start"
              size="small"
              tabIndex={-1}
              disableRipple
              checked={body.internalOwners.indexOf(user.id) > -1}
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
        label="PM(대내)"
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
        label="PL(대내)"
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
