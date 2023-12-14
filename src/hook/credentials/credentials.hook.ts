import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CredentialsStatus, PagePath } from '@common';
import { adminCredentialsStore, credentialsStore } from '@store';
import {
  CredentialsException,
  CredentialsSignInBody,
  CredentialsSignUpBody,
  CredentialsChangeStatusComponentProperty,
  CredentialsUpdatePasswordBody,
  SnackEvent,
  credentialsHttpService,
  credentialsValidator,
  localStorageService,
  CredentialsAdminUpdatePasswordBody,
} from '@service';

import { CredentialsGuardPassOrPath } from './types';

export class CredentialsHook {
  useCredentials() {
    const pathname = useLocation().pathname;

    const setCredentials = credentialsStore.useSetState();

    const getCredentials = useCallback(async () => {
      const res = await credentialsHttpService.credentials();

      if (res.ok === false) {
        return setCredentials(false);
      }

      setCredentials(res.data);
    }, [pathname, setCredentials]);

    useEffect(() => {
      getCredentials();
    }, [getCredentials]);
  }

  useGuestOnlyGuard() {
    const credentials = credentialsStore.useValue();

    const [passOrPath, setPassOrPath] = useState<CredentialsGuardPassOrPath>(null);

    useEffect(() => {
      if (credentials === null) {
        return setPassOrPath(null);
      }

      if (credentials) {
        return setPassOrPath(PagePath.Home);
      }

      setPassOrPath(true);
    }, [credentials, setPassOrPath]);

    return passOrPath;
  }

  useUserOnlyGuard() {
    const pathname = useLocation().pathname;
    const credentials = credentialsStore.useValue();

    const [passOrPath, setPassOrPath] = useState<CredentialsGuardPassOrPath>(null);

    useEffect(() => {
      if (credentials === null) {
        return setPassOrPath(null);
      }

      if (credentials === false) {
        if (pathname !== PagePath.SignOut) {
          SnackEvent.dispatchByWarning('접근 권한이 없습니다(로그인 필요)');
        }

        return setPassOrPath(PagePath.SignIn);
      }

      if (credentials.status === CredentialsStatus.Active) {
        return setPassOrPath(true);
      }

      if ([PagePath.MyPage, PagePath.SignOut].includes(pathname as PagePath)) {
        return setPassOrPath(true);
      }

      switch (credentials.status) {
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
    }, [pathname, credentials, setPassOrPath]);

    return passOrPath;
  }

  useBlockOnlyGuard() {
    const pathname = useLocation().pathname;
    const credentials = credentialsStore.useValue();

    const [passOrPath, setPassOrPath] = useState<CredentialsGuardPassOrPath>(null);

    useEffect(() => {
      if (credentials == null) {
        return setPassOrPath(null);
      }

      if (credentials === false) {
        SnackEvent.dispatchByWarning('접근 권한이 없습니다(로그인 필요)');

        return setPassOrPath(PagePath.SignIn);
      }

      if (credentials.status === CredentialsStatus.Active) {
        return setPassOrPath(PagePath.Home);
      }

      switch (credentials.status) {
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
    }, [pathname, credentials, setPassOrPath]);

    return passOrPath;
  }

  useSignInState() {
    return useState<CredentialsSignInBody>({
      email: localStorageService.getEmail(),
      password: '',
    });
  }

  useSignInCallback(body: CredentialsSignInBody) {
    const setCredentials = credentialsStore.useSetState();

    return useCallback(
      async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        const message = credentialsValidator.signin(body);

        if (message) {
          return SnackEvent.dispatchByWarning(message);
        }

        const res = await credentialsHttpService.signin(body);

        if (res.ok === false) {
          return SnackEvent.dispatchByException(new CredentialsException(res.exception));
        }

        localStorageService.setEmail(body.email);
        SnackEvent.dispatchBySuccess('로그인되었습니다.');
        setCredentials(res.data);
      },
      [body, setCredentials],
    );
  }

  useSignUpState() {
    return useState<CredentialsSignUpBody>({
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    });
  }

  useSignUpCallback(body: CredentialsSignUpBody) {
    const setCredentials = credentialsStore.useSetState();

    return useCallback(
      async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        const message = credentialsValidator.signup(body);

        if (message) {
          return SnackEvent.dispatchByWarning(message);
        }

        const res = await credentialsHttpService.signup(body);

        if (res.ok === false) {
          return SnackEvent.dispatchByException(new CredentialsException(res.exception));
        }

        SnackEvent.dispatchBySuccess('회원가입이 요청되었습니다.');
        setCredentials(res.data);
      },
      [body, setCredentials],
    );
  }

  useUpdateMyPasswordState() {
    return useState<CredentialsUpdatePasswordBody>({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  }

  useUpdatePasswordCallback(body: CredentialsUpdatePasswordBody) {
    return useCallback(async () => {
      const message = credentialsValidator.updatePassword(body);

      if (message) {
        SnackEvent.dispatchByWarning(message);
        return false;
      }

      const res = await credentialsHttpService.updatePassword(body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new CredentialsException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('비밀번호가 변경되었습니다.');

      return true;
    }, [body]);
  }

  useSignOutCallback() {
    const navigate = useNavigate();
    const setCredentials = credentialsStore.useSetState();

    return useCallback(async () => {
      const res = await credentialsHttpService.signout();

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      SnackEvent.dispatchBySuccess('로그아웃되었습니다.');

      setCredentials(false);
    }, [navigate, setCredentials]);
  }

  useSignOutEffect() {
    const signout = this.useSignOutCallback();

    useEffect(() => {
      signout();
    }, [signout]);
  }

  useGetCredentialsStatsCallback() {
    const setAdminCredentials = adminCredentialsStore.useSetState();

    return useCallback(async () => {
      const res = await credentialsHttpService.getStatsByAdmin();

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      setAdminCredentials((prev) => ({ ...prev, stats: res.data }));
    }, [setAdminCredentials]);
  }

  useLoadCredentialsStats() {
    const getCredentialsStats = this.useGetCredentialsStatsCallback();

    useEffect(() => {
      getCredentialsStats();
    }, [getCredentialsStats]);
  }

  useGetCredentialsListCallback() {
    const [{ query }, setAdminCredentials] = adminCredentialsStore.useState();

    return useCallback(async () => {
      const res = await credentialsHttpService.getListByAdmin(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      setAdminCredentials((prev) => ({
        ...prev,
        list:
          res.data.query.skip === 0
            ? res.data
            : {
                ...prev.list,
                rows: [...prev.list.rows, ...res.data.rows],
                query: res.data.query,
              },
      }));
    }, [query, setAdminCredentials]);
  }

  useCredentialsScrollEnd(scrollEnd: boolean) {
    const setAdminCredentials = adminCredentialsStore.useSetState();

    const setQuerySkip = useCallback(() => {
      setAdminCredentials((prev) => {
        const skip = prev.query.skip + prev.query.take;

        if (prev.list.total > skip) {
          return { ...prev, query: { ...prev.query, skip } };
        }

        return prev;
      });
    }, [setAdminCredentials]);

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setQuerySkip();
    }, [scrollEnd, setQuerySkip]);
  }

  useLoadCredentialsList() {
    const getCredentialsList = this.useGetCredentialsListCallback();

    useEffect(() => {
      getCredentialsList();
    }, [getCredentialsList]);
  }

  useUpdateCredentialsStatusByAdminCallback(id: number, property: CredentialsChangeStatusComponentProperty) {
    const getCredentialsStats = this.useGetCredentialsStatsCallback();
    const getCredentialsList = this.useGetCredentialsListCallback();

    return useCallback(async () => {
      const res = await credentialsHttpService.updateStatusByAdmin(id, { status: property.status.next });

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      SnackEvent.dispatchBySuccess(property.message);

      await getCredentialsStats();
      await getCredentialsList();
    }, [id, property, getCredentialsStats, getCredentialsList]);
  }

  useUpdatePasswordByAdminState() {
    return useState<CredentialsAdminUpdatePasswordBody>({
      newPassword: '',
      confirmPassword: '',
    });
  }

  useUpdatePasswordByAdminCallback(id: number, body: CredentialsAdminUpdatePasswordBody) {
    return useCallback(async () => {
      const message = credentialsValidator.updatePasswordByAdmin(body);

      if (message) {
        SnackEvent.dispatchByWarning(message);
        return false;
      }

      const res = await credentialsHttpService.updatePasswordByAdmin(id, body);

      if (res.ok === false) {
        SnackEvent.dispatchByException(new CredentialsException(res.exception));
        return false;
      }

      SnackEvent.dispatchBySuccess('비밀번호가 변경되었습니다.');

      return true;
    }, [id, body]);
  }
}

export const credentialsHook = new CredentialsHook();
