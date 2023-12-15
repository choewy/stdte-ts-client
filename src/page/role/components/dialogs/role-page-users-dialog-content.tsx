import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, List } from '@mui/material';

import { RoleAdminUsersBody } from '@service';
import { scrollHook, selectHook } from '@hook';
import { selectStore } from '@store';

import { RolePageUsersDialogContentListItem } from './role-page-users-dialog-content-list-item';

export const RolePageUsersDialogContent: FunctionComponent<{
  name: string;
  body: RoleAdminUsersBody;
  setBody: SetterOrUpdater<RoleAdminUsersBody>;
}> = ({ name, body, setBody }) => {
  const { users } = selectStore.useValue();

  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  selectHook.useSelectUsersScrollEnd(scroll.end);
  selectHook.useSelectUserMount();
  selectHook.useSelectUserUnMount();

  return (
    <Box
      {...{
        ref: scroll.ref,
        component: 'div',
        onScroll,
        sx: { height: 600, overflow: 'scroll' },
      }}
    >
      <List>
        {users.list.rows.map((row) => (
          <RolePageUsersDialogContentListItem
            {...{
              key: ['select-user-list-item', row.id, row.name].join('-'),
              name,
              row,
              body,
              setBody,
            }}
          />
        ))}
      </List>
    </Box>
  );
};
