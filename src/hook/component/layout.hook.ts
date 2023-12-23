import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppConfig } from '@config';
import { PagePath } from '@common';
import { LoadingEvent } from '@core';
import { layoutStore } from '@store';
import {
  SidebarMenuItemCollapseProperty,
  SidebarMenuItemNavigatePropery,
  SidebarMenuItemProperty,
  SidebarMenuType,
} from '@service';

export class LayoutHook {
  useTitleListener() {
    const pathname = useLocation().pathname;
    const setLayout = layoutStore.useSetState();

    const parseTitle = useCallback(() => {
      switch (pathname) {
        case PagePath.Home:
          return '홈';

        case PagePath.SignIn:
          return '로그인';

        case PagePath.SignUp:
          return '회원가입';

        case PagePath.SignOut:
          return '로그아웃';

        case PagePath.Wating:
          return '가입 승인 대기';

        case PagePath.Rejected:
          return '가입 거절';

        case PagePath.Disabled:
          return '비활성 계정';

        case PagePath.MyPage:
          return '마이페이지';

        case PagePath.AdminRole:
          return '역할관리';

        case PagePath.AdminCredentials:
          return '계정관리';

        case PagePath.AdminSetting:
          return '공통설정';

        case PagePath.User:
          return '구성원';

        case PagePath.ProjectList:
          return '사업';

        case PagePath.ProjectCustomer:
          return '고객사';

        case PagePath.ProjectBusinessCategory:
          return '사업구분';

        case PagePath.ProjectIndustryCategory:
          return '산업분야';

        case PagePath.ProjectTaskCategory:
          return '수행업무구분';

        case PagePath.TimeAnalysis:
          return '시간 집계';
      }

      if (pathname.startsWith(PagePath.TimeRecord)) {
        return '시간 기록';
      }

      return '';
    }, [pathname]);

    useEffect(() => {
      const title = parseTitle();
      const version = new AppConfig().getAppVersion();

      setLayout((prev) => ({
        ...prev,
        helmet: { title: ['STDTE', title, version].join(' - ') },
        header: { title },
      }));
    }, [parseTitle, setLayout]);
  }

  useResizeListener() {
    const setLayout = layoutStore.useSetState();

    const listener = useCallback(() => {
      setLayout((prev) => ({
        ...prev,
        size: {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        },
      }));
    }, [setLayout]);

    useEffect(() => {
      window.addEventListener('resize', listener);

      return () => {
        window.removeEventListener('resize', listener);
      };
    }, [listener]);
  }

  useLoadingListener() {
    const setLayout = layoutStore.useSetState();

    const listener = useCallback(
      (e: Event) => {
        setLayout((prev) => ({
          ...prev,
          loading: (e as LoadingEvent).detail,
        }));
      },
      [setLayout],
    );

    useEffect(() => {
      window.addEventListener(LoadingEvent.EVENT_NAME, listener);

      return () => {
        window.removeEventListener(LoadingEvent.EVENT_NAME, listener);
      };
    }, [listener]);
  }

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
    const closeSidebar = this.useSidebarCallback(false);

    const onClick = useCallback(() => {
      closeSidebar();
      navigate(item.path);
    }, [item, closeSidebar, navigate]);

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
