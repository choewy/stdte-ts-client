import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Location, NavigateFunction, useNavigate } from 'react-router-dom';
import { isEmail, isNotEmpty, minLength } from 'class-validator';

import { Auth, AuthStatusValue, AuthStatusText, NotiEvent, PagePath, TimeoutKey } from '@common';
import { AuthStore, AuthStoreValue, authStoreDefaultValue } from '@store';
import {
  AuthApiService,
  AuthResponse,
  AuthSignInBody,
  AuthSignUpBody,
  LocalStorageService,
  TimeoutService,
} from '@service';

export class AuthHook {
  private static instance = new AuthHook();

  public static getInstance(): AuthHook {
    return this.instance;
  }

  private toAuthStoreValue(data: AuthResponse): AuthStoreValue {
    const authStoreValue: AuthStoreValue = {
      ok: true,
      auth: null,
      role: null,
      authStatus: 0,
      employmentStatus: 0,
    };

    if (data) {
      authStoreValue.auth = {
        id: data.id,
        email: data.email,
        name: data.name,
        authStatus: data.authStatus.value,
        employmentStatus: data.employmentStatus.value,
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

    return authStoreValue;
  }

  useAuthCheck(ok: boolean, location: Location, navigate: NavigateFunction): void {
    const pathname = location.pathname as PagePath;

    const setAuthStore = AuthStore.getInstance().useSetState();

    const checkAuth = useCallback(async () => {
      const { ok, data } = await AuthApiService.getInstance().checkAuth();

      if (ok === true) {
        return setAuthStore(this.toAuthStoreValue(data));
      }

      setAuthStore({ ...authStoreDefaultValue, ok: false });
    }, [pathname, navigate, setAuthStore]);

    useEffect(() => {
      if (ok !== null) {
        return;
      }

      checkAuth();
    }, [ok, pathname, checkAuth]);
  }

  useAuthGuard(ok: boolean, auth: Auth, location: Location, navigate: NavigateFunction): void {
    const pathname = location.pathname as PagePath;

    useEffect(() => {
      if (ok === null) {
        return;
      }

      if (ok === false) {
        if (![PagePath.SignIn, PagePath.SignUp].includes(pathname)) {
          navigate(PagePath.SignIn, { replace: true });
        }

        return;
      }

      if (auth.authStatus === AuthStatusValue.Wating) {
        return navigate(PagePath.Forbidden, { replace: true, state: AuthStatusText.Wating });
      }

      if (auth.authStatus === AuthStatusValue.Reject) {
        return navigate(PagePath.Forbidden, { replace: true, state: AuthStatusText.Reject });
      }

      if (auth.authStatus === AuthStatusValue.Disable) {
        return navigate(PagePath.Forbidden, { replace: true, state: AuthStatusText.Disable });
      }

      if ([PagePath.Forbidden].includes(pathname)) {
        return navigate(PagePath.Home, { replace: true });
      }

      if ([PagePath.SignIn, PagePath.SignUp].includes(pathname)) {
        return navigate(PagePath.Home, { replace: true });
      }
    }, [ok, auth, pathname, navigate]);
  }

  useSignInState() {
    return useState<AuthSignInBody>({
      email: LocalStorageService.getInstance().getEmail(),
      password: '',
    });
  }

  useSignUpState() {
    return useState<AuthSignUpBody>({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    });
  }

  useSignIn(body: AuthSignInBody) {
    const setAuthStore = AuthStore.getInstance().useSetState();

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

        const { ok, data, exception } = await AuthApiService.getInstance().signin(body);

        if (ok === false) {
          return NotiEvent.dispatchException(exception);
        }

        setAuthStore(this.toAuthStoreValue(data));

        LocalStorageService.getInstance().setEmail(body.email);
      },
      [body, setAuthStore],
    );
  }

  useSignUp(body: AuthSignUpBody) {
    const setAuthStore = AuthStore.getInstance().useSetState();

    return useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isNotEmpty(body.email) === false) {
          return NotiEvent.dispatchWarning('이메일을 입력하세요.');
        }

        if (isEmail(body.email) === false) {
          return NotiEvent.dispatchWarning('이메일 형식이 아닙니다.');
        }

        if (isNotEmpty(body.name) === false) {
          return NotiEvent.dispatchWarning('이름을 입력하세요.');
        }

        if (minLength(body.name, 2) === false) {
          return NotiEvent.dispatchWarning('이름을 확인하세요.');
        }

        if (isNotEmpty(body.password) === false) {
          return NotiEvent.dispatchWarning('비밀번호를 입력하세요.');
        }

        if (minLength(body.password, 6) === false) {
          return NotiEvent.dispatchWarning('비밀번호를 확인하세요.');
        }

        if (body.password !== body.confirmPassword) {
          return NotiEvent.dispatchWarning('비밀번호가 일치하지 않습니다.');
        }

        const { ok, data, exception } = await AuthApiService.getInstance().signup(body);

        if (ok === false) {
          return NotiEvent.dispatchException(exception);
        }

        setAuthStore(this.toAuthStoreValue(data));

        LocalStorageService.getInstance().setEmail(body.email);
      },
      [body],
    );
  }

  useSignout(): void {
    const navigate = useNavigate();

    const authStore = AuthStore.getInstance().useValue();
    const setAuthStore = AuthStore.getInstance().useSetState();

    const signout = useCallback(async () => {
      if (authStore.ok === null || authStore.ok === false) {
        return;
      }

      const { ok, exception } = await AuthApiService.getInstance().signout();

      if (ok === false) {
        NotiEvent.dispatchException(exception);
      } else {
        setAuthStore({ ...authStoreDefaultValue, ok: false });

        TimeoutService.getInstance().setTimeout(TimeoutKey.SignOut, () =>
          NotiEvent.dispatchInfo('로그인 페이지로 이동합니다.'),
        );
      }
    }, [authStore, setAuthStore, navigate]);

    useEffect(() => {
      signout();
    }, [signout]);
  }
}
