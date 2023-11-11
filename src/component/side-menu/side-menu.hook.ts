import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ListItemButtonProps } from '@mui/material';

import { Auth, PagePath, Role, RolePolicy, SIDE_MENUS, SideMenuType, SideMenuItemValue } from '@common';

export class SideMenuHook {
  private static instance = new SideMenuHook();

  public static getInstance() {
    return this.instance;
  }

  getSidebarMenuValuesByFilter(auth: Auth | null, role: Role | null): SideMenuItemValue[] {
    const authTypes: SideMenuType[] = [SideMenuType.Global];

    if (auth === null) {
      authTypes.push(SideMenuType.Public);
    } else {
      authTypes.push(SideMenuType.Private);
    }

    const sideMenuValues = SIDE_MENUS.filter(({ type }) => authTypes.includes(type));

    if (role === null) {
      return sideMenuValues;
    }

    return sideMenuValues.filter(({ access }) => {
      const keys = Object.keys(access ?? {}) as Array<keyof Omit<RolePolicy, 'id'>>;

      for (const key of keys) {
        if (role.rolePolicy[key] < access[key]) {
          return false;
        }
      }

      return true;
    });
  }

  useNavigateMenuItemProps(item: SideMenuItemValue): [boolean, Pick<ListItemButtonProps, 'onClick'>['onClick']] {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    const [selected, setSelected] = useState<boolean>(false);

    const onClick = useCallback(() => {
      navigate(item.path);
    }, [item, navigate]);

    useEffect(() => {
      if (pathname.startsWith(item.path)) {
        if (item.path === PagePath.Home) {
          setSelected(pathname === item.path);
        } else {
          setSelected(true);
        }
      }
    }, [item, pathname, setSelected]);

    return [selected, onClick];
  }

  useCollapseMenuItemProps(item: SideMenuItemValue): [boolean, Pick<ListItemButtonProps, 'onClick'>['onClick']] {
    const location = useLocation();
    const pathname = location.pathname;

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onClick = useCallback(() => {
      setCollapsed((prev) => !prev);
    }, [item, setCollapsed]);

    useEffect(() => {
      const childItem = item.children.find(({ path }) => pathname.startsWith(path));

      if (childItem) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }, [item, pathname, setCollapsed]);

    return [collapsed, onClick];
  }
}
