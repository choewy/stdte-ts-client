import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Location, NavigateFunction, useNavigate } from 'react-router-dom';
import { isEmail, isNotEmpty, minLength } from 'class-validator';

import { NotiEvent, PagePath, TimeoutKey } from '@common';
import { AuthStore, AuthStoreValue } from '@store';
import { AuthApiService, AuthSignInBody, LocalStorageService, TimeoutService } from '@service';

export class AuthHook {
  private static instance = new AuthHook();

  public static getInstance() {
    return this.instance;
  }

  useAuthCheck(ok: boolean, location: Location): void {
    const pathname = location.pathname as PagePath;

    const setAuthStore = AuthStore.getInstance().useSetState();

    const checkAuth = useCallback(async () => {
      const { ok, data, exception } = await AuthApiService.getInstance().checkAuth();

      if (ok === false) {
        const pathname = location.pathname as PagePath;

        if (![PagePath.SignIn, PagePath.SignUp, PagePath.SignOut].includes(pathname)) {
          NotiEvent.dispatchException(exception);
        }

        return setAuthStore({ ok: false, auth: null, role: null });
      }

      const authStoreValue: AuthStoreValue = {
        ok: true,
        auth: null,
        role: null,
      };

      if (data) {
        authStoreValue.auth = {
          id: data.id,
          email: data.email,
          name: data.name,
        };
      }

      if (data.role) {
        authStoreValue.role = {
          id: data.role.id,
          name: data.role.name,
          rolePolicy: null,
        };
      }

      if (data.role?.rolePolicy) {
        authStoreValue.role.rolePolicy = {
          id: data.role.rolePolicy.id,
          accessRole: data.role.rolePolicy.accessRole.value,
          accessTeam: data.role.rolePolicy.accessTeam.value,
          accessUser: data.role.rolePolicy.accessUser.value,
          accessProject: data.role.rolePolicy.accessProject.value,
        };
      }

      setAuthStore(authStoreValue);
    }, [location, setAuthStore]);

    useEffect(() => {
      if (ok === null) {
        checkAuth();
      }
    }, [ok, pathname, checkAuth]);
  }

  useAuthGuard(ok: boolean, location: Location, navigate: NavigateFunction): void {
    useEffect(() => {
      const pathname = location.pathname as PagePath;

      if ([PagePath.Home, PagePath.SignOut].includes(pathname)) {
        if (ok === false) {
          navigate(PagePath.SignIn, { replace: true });
        }

        return;
      }

      if ([PagePath.SignIn, PagePath.SignUp].includes(pathname as PagePath)) {
        if (ok === null || ok === false) {
          return;
        }

        navigate(PagePath.Home, { replace: true });
      } else {
        if (ok === true) {
          return;
        }

        navigate(PagePath.SignIn, { replace: true });
      }
    }, [ok, location.pathname, navigate]);
  }

  useSignInState() {
    return useState<AuthSignInBody>({
      email: LocalStorageService.getInstance().getEmail(),
      password: '',
    });
  }

  useSignIn(body: AuthSignInBody) {
    return useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isNotEmpty(body.email) === false) {
          return NotiEvent.dispatchWarning('이메일을 입력하세요.');
        }

        if (isEmail(body.email) === false) {
          return NotiEvent.dispatchWarning('이메일 형식이 아닙니다.');
        }

        if (isNotEmpty(body.password) === false) {
          return NotiEvent.dispatchWarning('비밀번호를 입력하세요.');
        }

        if (minLength(body.password, 6) === false) {
          return NotiEvent.dispatchWarning('비밀번호를 확인하세요.');
        }

        const { ok, exception } = await AuthApiService.getInstance().signin(body);

        if (ok === false) {
          return NotiEvent.dispatchException(exception);
        }
      },
      [body],
    );
  }

  useSignout(): void {
    const navigate = useNavigate();
    const resetAuthStore = AuthStore.getInstance().useResetState();

    const signout = useCallback(async () => {
      const { ok, exception } = await AuthApiService.getInstance().signout();

      if (ok === false) {
        NotiEvent.dispatchException(exception);
      } else {
        resetAuthStore();

        TimeoutService.getInstance().setTimeout(TimeoutKey.SignOut, () =>
          NotiEvent.dispatchInfo('로그인 페이지로 이동합니다.'),
        );
      }
    }, [resetAuthStore, navigate]);

    useEffect(() => {
      signout();
    }, [signout]);
  }
}
