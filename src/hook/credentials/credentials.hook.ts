import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { adminCredentialsStore, authorizeStore } from '@store';
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
  CredentialsUpdatePasswordByIdBody,
} from '@service';

export class CredentialsHook {
  useSignInState() {
    return useState<CredentialsSignInBody>({
      email: localStorageService.getEmail(),
      password: '',
    });
  }

  useSignInCallback(body: CredentialsSignInBody) {
    const setAuthorize = authorizeStore.useSetState();

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
        setAuthorize(res.data);
      },
      [body, setAuthorize],
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
    const setAuthorize = authorizeStore.useSetState();

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
        setAuthorize(res.data);
      },
      [body, setAuthorize],
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
    const setAuthorize = authorizeStore.useSetState();

    return useCallback(async () => {
      const res = await credentialsHttpService.signout();

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      SnackEvent.dispatchBySuccess('로그아웃되었습니다.');

      setAuthorize(false);
    }, [navigate, setAuthorize]);
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
      const res = await credentialsHttpService.getStatsRows();

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      setAdminCredentials((prev) => ({ ...prev, stats: res.data }));
    }, [setAdminCredentials]);
  }

  useGetCredentialsListCallback() {
    const [{ load, query }, setAdminCredentials] = adminCredentialsStore.useState();

    return useCallback(async () => {
      if (load === false) {
        return;
      }

      const res = await credentialsHttpService.getList(query);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      setAdminCredentials((prev) => ({
        ...prev,
        load: false,
        list:
          res.data.query.skip === 0
            ? res.data
            : {
                ...prev.list,
                rows: [...prev.list.rows, ...res.data.rows],
                query: res.data.query,
              },
      }));
    }, [load, query, setAdminCredentials]);
  }

  useCredentialsScrollEnd(scrollEnd: boolean) {
    const setAdminCredentials = adminCredentialsStore.useSetState();

    useEffect(() => {
      if (scrollEnd === false) {
        return;
      }

      setAdminCredentials((prev) => {
        const skip = prev.query.skip + prev.query.take;

        if (prev.list.total > skip) {
          return { ...prev, load: true, query: { ...prev.query, skip } };
        }

        return prev;
      });
    }, [scrollEnd, setAdminCredentials]);
  }

  useMountCredentialsPage() {
    const getCredentialsStats = this.useGetCredentialsStatsCallback();
    const getCredentialsList = this.useGetCredentialsListCallback();

    useEffect(() => {
      getCredentialsStats();
    }, [getCredentialsStats]);

    useEffect(() => {
      getCredentialsList();
    }, [getCredentialsList]);
  }

  useUnmountCredentialsPage() {
    const resetAdminCredentials = adminCredentialsStore.useResetState();

    useEffect(() => {
      return () => {
        resetAdminCredentials();
      };
    }, [resetAdminCredentials]);
  }

  useUpdateCredentialsStatusByAdminCallback(id: number, property: CredentialsChangeStatusComponentProperty) {
    const getCredentialsStats = this.useGetCredentialsStatsCallback();

    const setAdminCredentials = adminCredentialsStore.useSetState();

    return useCallback(async () => {
      const res = await credentialsHttpService.updateStatusById(id, { status: property.status.next });

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      SnackEvent.dispatchBySuccess(property.message);

      setAdminCredentials((prev) => {
        const rows = prev.list.rows.filter((row) => row.id !== id);
        const load = rows.length < prev.query.take;

        return { ...prev, load, list: { ...prev.list, rows } };
      });

      await getCredentialsStats();
    }, [id, property, setAdminCredentials, getCredentialsStats]);
  }

  useUpdatePasswordByAdminState() {
    return useState<CredentialsUpdatePasswordByIdBody>({
      newPassword: '',
      confirmPassword: '',
    });
  }

  useUpdatePasswordByAdminCallback(id: number, body: CredentialsUpdatePasswordByIdBody) {
    return useCallback(async () => {
      const message = credentialsValidator.updatePasswordById(body);

      if (message) {
        SnackEvent.dispatchByWarning(message);
        return false;
      }

      const res = await credentialsHttpService.updatePasswordById(id, body);

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
