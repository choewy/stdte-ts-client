import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Location, NavigateFunction, useNavigate } from 'react-router-dom';
import { isEmail, isNotEmpty, minLength } from 'class-validator';

import { Auth, AuthStatusValue, AuthStatusText, NotiEvent, PagePath, TimeoutKey } from '@common';
import { SignStoreValueGenerator, signStore } from '@store';
import { AuthSignInBody, AuthSignUpBody, authApiService, localStorageService, timeoutService } from '@service';

export class AuthHook {
  useAuthCheck(ok: boolean, location: Location, navigate: NavigateFunction): void {
    const pathname = location.pathname as PagePath;

    const setSign = signStore.useSetState();

    const checkAuth = useCallback(async () => {
      const { ok, data } = await authApiService.checkAuth();

      let sign = new SignStoreValueGenerator().setOk(ok);

      if (ok === true) {
        sign = sign.setAuth(data).setRole(data.role);
      }

      return setSign(sign);
    }, [pathname, navigate, setSign]);

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
      email: localStorageService.getEmail(),
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
    const setSign = signStore.useSetState();

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

        const { ok, data, exception } = await authApiService.signin(body);

        if (ok === false) {
          return NotiEvent.dispatchException(exception);
        }

        setSign(new SignStoreValueGenerator().setOk(ok).setAuth(data).setRole(data.role));

        localStorageService.setEmail(body.email);
      },
      [body, setSign],
    );
  }

  useSignUp(body: AuthSignUpBody) {
    const setSign = signStore.useSetState();

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

        const { ok, data, exception } = await authApiService.signup(body);

        if (ok === false) {
          return NotiEvent.dispatchException(exception);
        }

        setSign(new SignStoreValueGenerator().setOk(ok).setAuth(data).setRole(data.role));

        localStorageService.setEmail(body.email);
      },
      [body],
    );
  }

  useSignout(): void {
    const navigate = useNavigate();

    const [sign, setSign] = signStore.useState();

    const signout = useCallback(async () => {
      if (sign.ok === null || sign.ok === false) {
        return;
      }

      const { ok, exception } = await authApiService.signout();

      if (ok === false) {
        NotiEvent.dispatchException(exception);
      } else {
        setSign(new SignStoreValueGenerator().setOk(false));

        timeoutService.setTimeout(TimeoutKey.SignOut, () => NotiEvent.dispatchInfo('로그인 페이지로 이동합니다.'));
      }
    }, [sign, setSign, navigate]);

    useEffect(() => {
      signout();
    }, [signout]);
  }
}

export const authHook = new AuthHook();
