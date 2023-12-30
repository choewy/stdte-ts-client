import { FunctionComponent, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Checkbox, Chip, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { RoleUpdateUsersBody, SelectRow } from '@service';

export const RolePageUsersDialogContentListItem: FunctionComponent<{
  disabled: boolean;
  name: string;
  row: SelectRow;
  body: RoleUpdateUsersBody;
  setBody: SetterOrUpdater<RoleUpdateUsersBody>;
}> = ({ disabled, name, row, body, setBody }) => {
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
    <ListItem sx={{ paddingY: 0.5, paddingX: 0 }}>
      <ListItemButton
        {...{
          onClick,
          disabled,
          sx: {
            fontSize: '12px',
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
        <ListItemText
          {...{
            primary: row.name,
            primaryTypographyProps: { sx: { fontSize: '12px' } },
          }}
        />
        {row.description && row.description !== name && <Chip label={row.description} />}
      </ListItemButton>
    </ListItem>
  );
};
