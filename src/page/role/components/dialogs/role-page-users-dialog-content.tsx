import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, List } from '@mui/material';

import { RoleUpdateUsersBody } from '@service';
import { scrollHook, selectHook } from '@hook';
import { authorizeStore, selectStore } from '@store';

import { RolePageUsersDialogContentListItem } from './role-page-users-dialog-content-list-item';

export const RolePageUsersDialogContent: FunctionComponent<{
  name: string;
  body: RoleUpdateUsersBody;
  setBody: SetterOrUpdater<RoleUpdateUsersBody>;
}> = ({ name, body, setBody }) => {
  const authorize = authorizeStore.useValue();
  const { users } = selectStore.useValue();

  const scroll = scrollHook.useDivScrollRefObject();
  const onScroll = scrollHook.useOnScroll(scroll.ref, scroll.setEnd);

  selectHook.useScrollEndUser(scroll.end);
  selectHook.useMountUser();
  selectHook.useUnMountUser();

  return (
    <Box
      {...{
        ref: scroll.ref,
        component: 'div',
        onScroll,
        sx: { height: 600 },
      }}
    >
      <List>
        {users.list.rows.map((row) => (
          <RolePageUsersDialogContentListItem
            {...{
              key: ['select-user-list-item', row.id, row.name].join('-'),
              disabled: authorize !== null && authorize !== false && authorize.id === row.id,
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
