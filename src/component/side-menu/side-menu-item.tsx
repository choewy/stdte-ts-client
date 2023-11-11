import { Fragment, FunctionComponent } from 'react';

import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { SideMenuDefaultProps, SideMenuItemProps } from './types';
import { SideMenuHook } from './side-menu.hook';

export const SideDefaultMenuItem: FunctionComponent<SideMenuDefaultProps> = ({
  type,
  selected,
  onClick,
  Icon,
  primary,
  divider,
}) => {
  return (
    <Fragment>
      <ListItem disablePadding>
        <ListItemButton selected={selected} onClick={onClick}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={primary} />
          {type === 'collapse' ? selected ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItemButton>
      </ListItem>
      {divider && <Divider />}
    </Fragment>
  );
};

export const SideNavigateMenuItem: FunctionComponent<SideMenuItemProps> = ({ item }) => {
  const [selected, onClick] = SideMenuHook.getInstance().useNavigateMenuItemProps(item);

  return (
    <SideDefaultMenuItem
      type="navigate"
      selected={selected}
      onClick={onClick}
      Icon={item.Icon}
      primary={item.title}
      divider={item.divider}
    />
  );
};

export const SideCollapseMenuItem: FunctionComponent<SideMenuItemProps> = ({ item }) => {
  const [collapsed, onClick] = SideMenuHook.getInstance().useCollapseMenuItemProps(item);

  return (
    <Fragment>
      <SideDefaultMenuItem
        type="collapse"
        selected={collapsed}
        onClick={onClick}
        Icon={item.Icon}
        primary={item.title}
      />
      <Collapse in={collapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 2 }}>
          {item.children.map((childItem) => (
            <SideNavigateMenuItem key={childItem.key} item={childItem} />
          ))}
        </List>
        <Divider />
      </Collapse>
      {item.divider && <Divider />}
    </Fragment>
  );
};

export const SideMenuItem: FunctionComponent<SideMenuItemProps> = ({ item }) => {
  if (Array.isArray(item.children)) {
    return <SideCollapseMenuItem item={item} />;
  } else {
    return <SideNavigateMenuItem item={item} />;
  }
};
