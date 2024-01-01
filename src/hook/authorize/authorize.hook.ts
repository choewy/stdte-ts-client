import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CredentialsStatus, PagePath } from '@common';
import { SnackEvent, credentialsHttpService } from '@service';
import { authorizeStore } from '@store';

import { AuthorizeGuardPassOrPath } from './types';

export class AuthorizeHook {
  useCheckAuthorizeCallback() {
    const pathname = useLocation().pathname;
    const [authorize, setAuthorize] = authorizeStore.useState();

    return useCallback(async () => {
      if (authorize === false || authorize) {
        return;
      }

      const res = await credentialsHttpService.credentials();

      if (res.ok === false) {
        return setAuthorize(false);
      }

      setAuthorize(res.data);
    }, [pathname, authorize, setAuthorize]);
  }

  useMount() {
    const checkAuthorize = this.useCheckAuthorizeCallback();

    useEffect(() => {
      checkAuthorize();
    }, [checkAuthorize]);
  }

  useGuestOnlyGuard() {
    const authorize = authorizeStore.useValue();

    const [passOrPath, setPassOrPath] = useState<AuthorizeGuardPassOrPath>(null);

    useEffect(() => {
      if (authorize === null) {
        return setPassOrPath(null);
      }

      if (authorize) {
        return setPassOrPath(PagePath.Home);
      }

      setPassOrPath(true);
    }, [authorize, setPassOrPath]);

    return passOrPath;
  }

  useUserOnlyGuard() {
    const pathname = useLocation().pathname;
    const authorize = authorizeStore.useValue();

    const [passOrPath, setPassOrPath] = useState<AuthorizeGuardPassOrPath>(null);

    useEffect(() => {
      if (authorize === null) {
        return setPassOrPath(null);
      }

      if (authorize === false) {
        if (pathname !== PagePath.SignOut) {
          SnackEvent.dispatchByWarning('접근 권한이 없습니다(로그인 필요)');
        }

        return setPassOrPath(PagePath.SignIn);
      }

      if (authorize.status === CredentialsStatus.Active) {
        return setPassOrPath(true);
      }

      if ([PagePath.MyPage, PagePath.SignOut].includes(pathname as PagePath)) {
        return setPassOrPath(true);
      }

      switch (authorize.status) {
        case CredentialsStatus.Wating:
          SnackEvent.dispatchByWarning('접근 권한이 없습니다(가입승인 대기 중)');
          return setPassOrPath(PagePath.Wating);

        case CredentialsStatus.Reject:
          SnackEvent.dispatchByWarning('접근 권한이 없습니다(가입승인 거절)');
          return setPassOrPath(PagePath.Rejected);

        case CredentialsStatus.Disable:
          SnackEvent.dispatchByWarning('접근 권한이 없습니다(비활성 계정)');
          return setPassOrPath(PagePath.Disabled);
      }
    }, [pathname, authorize, setPassOrPath]);

    return passOrPath;
  }

  useBlockOnlyGuard() {
    const pathname = useLocation().pathname;
    const authorize = authorizeStore.useValue();

    const [passOrPath, setPassOrPath] = useState<AuthorizeGuardPassOrPath>(null);

    useEffect(() => {
      if (authorize == null) {
        return setPassOrPath(null);
      }

      if (authorize === false) {
        SnackEvent.dispatchByWarning('접근 권한이 없습니다(로그인 필요)');

        return setPassOrPath(PagePath.SignIn);
      }

      if (authorize.status === CredentialsStatus.Active) {
        return setPassOrPath(PagePath.Home);
      }

      switch (authorize.status) {
        case CredentialsStatus.Wating:
          if (pathname === PagePath.Wating) {
            setPassOrPath(true);
          } else {
            setPassOrPath(PagePath.Wating);
          }
          break;

        case CredentialsStatus.Reject:
          if (pathname === PagePath.Rejected) {
            setPassOrPath(true);
          } else {
            setPassOrPath(PagePath.Rejected);
          }
          break;

        case CredentialsStatus.Disable:
          if (pathname === PagePath.Disabled) {
            setPassOrPath(true);
          } else {
            setPassOrPath(PagePath.Disabled);
          }
          break;
      }
    }, [pathname, authorize, setPassOrPath]);

    return passOrPath;
  }
}

export const authorizeHook = new AuthorizeHook();
