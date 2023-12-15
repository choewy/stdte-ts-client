import { FunctionComponent, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Checkbox, Chip, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { RoleAdminUsersBody, SelectRowResponse } from '@service';

export const RolePageUsersDialogContentListItem: FunctionComponent<{
  name: string;
  row: SelectRowResponse;
  body: RoleAdminUsersBody;
  setBody: SetterOrUpdater<RoleAdminUsersBody>;
}> = ({ name, row, body, setBody }) => {
  const onClick = useCallback(() => {
    setBody((prev) => {
      const checked = prev.findIndex((user) => user.id === row.id) > -1;

      if (checked) {
        return prev.filter((user) => user.id !== row.id);
      } else {
        return [...prev, row];
      }
    });
  }, [row, setBody]);

  return (
    <ListItem sx={{ paddingY: 0 }}>
      <ListItemButton
        {...{
          onClick,
          sx: {
            fontSize: 13,
            height: 30,
          },
        }}
      >
        <ListItemIcon>
          <Checkbox
            {...{
              edge: 'start',
              size: 'small',
              checked: body.findIndex((user) => user.id === row.id) > -1,
              tabIndex: -1,
              disableRipple: true,
            }}
          />
        </ListItemIcon>
        <ListItemText {...{ primary: row.name, sx: { fontSize: 13 } }} />
        {row.description && row.description !== name && <Chip label={row.description} />}
      </ListItemButton>
    </ListItem>
  );
};