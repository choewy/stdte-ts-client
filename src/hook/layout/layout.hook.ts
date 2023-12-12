import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { layoutStore } from '@store';
import {
  SidebarMenuItemCollapseProperty,
  SidebarMenuItemNavigatePropery,
  SidebarMenuItemProperty,
  SidebarMenuType,
} from '@service';
import { PagePath } from '@common';

export class LayoutHook {
  useSidebarCallback(open: boolean) {
    const setLayout = layoutStore.useSetState();

    return useCallback(() => {
      setLayout((prev) => ({ ...prev, sidebar: { open } }));
    }, [open, setLayout]);
  }

  useSidbarSelectState(item: SidebarMenuItemProperty) {
    const pathname = useLocation().pathname;

    const [selected, setSelected] = useState<boolean>(false);

    useEffect(() => {
      if (pathname === PagePath.Home) {
        return setSelected(pathname === (item.type === SidebarMenuType.Collapse ? item.prefix : item.path));
      }

      if (pathname.startsWith(item.type === SidebarMenuType.Collapse ? item.prefix : item.path)) {
        return setSelected(true);
      }
    }, [item, pathname, setSelected]);

    return selected;
  }

  useSidebarNavigateCallback(item: SidebarMenuItemNavigatePropery) {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
      navigate(item.path);
    }, [item, navigate]);

    return onClick;
  }

  useSidebarCollapseState(item: SidebarMenuItemCollapseProperty): [boolean, () => void] {
    const pathname = useLocation().pathname;

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onClick = useCallback(() => {
      setCollapsed((prev) => !prev);
    }, [setCollapsed]);

    useEffect(() => {
      const match = item.children.findIndex((child) => pathname.startsWith(child.path));

      setCollapsed(match > -1);
    }, [item, pathname, setCollapsed]);

    return [collapsed, onClick];
  }
}

export const layoutHook = new LayoutHook();
