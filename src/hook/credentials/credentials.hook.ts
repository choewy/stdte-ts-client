import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PagePath } from '@common';
import { credentialsStore } from '@store';
import {
  CredentialsException,
  CredentialsSignInBody,
  CredentialsSignUpBody,
  CredentialsUpdatePasswordBody,
  SnackEvent,
  credentialsHttpService,
  credentialsValidator,
} from '@service';

export class CredentialsHook {
  useCredentials() {
    const pathname = useLocation().pathname;
    const setCredentials = credentialsStore.useSetState();

    const getCredentials = useCallback(async () => {
      const res = await credentialsHttpService.credentials();

      if (res.ok === false) {
        setCredentials(false);

        if (![PagePath.SignIn, PagePath.SignUp].find((pagepath) => pagepath.startsWith(pathname))) {
          SnackEvent.dispatchByException(new CredentialsException(res.exception));
        }

        return;
      }

      setCredentials(res.data);
    }, [setCredentials]);

    useEffect(() => {
      getCredentials();
    }, [getCredentials]);
  }

  useGuestOnlyGuard(): boolean | null {
    const credentials = credentialsStore.useValue();

    const [pass, setPass] = useState<boolean | null>(null);

    const lazy = useCallback(() => {
      if (credentials === null) {
        return setPass(null);
      }

      setTimeout(() => {
        if (credentials === false) {
          return setPass(true);
        } else {
          return setPass(false);
        }
      }, 1500);
    }, [credentials, setPass]);

    useEffect(() => {
      lazy();
    }, [lazy]);

    return pass;
  }

  useUserOnlyGuard(): boolean | null {
    const credentials = credentialsStore.useValue();

    const [pass, setPass] = useState<boolean | null>(null);

    const lazy = useCallback(() => {
      if (credentials === null) {
        return setPass(null);
      }

      setTimeout(() => {
        if (credentials) {
          return setPass(true);
        } else {
          return setPass(false);
        }
      }, 1500);
    }, [credentials, setPass]);

    useEffect(() => {
      lazy();
    }, [lazy]);

    return pass;
  }

  useSignInState() {
    return useState<CredentialsSignInBody>({
      email: '',
      password: '',
    });
  }

  useSignInCallback(body: CredentialsSignInBody) {
    const setCredentials = credentialsStore.useSetState();

    return useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = credentialsValidator.signin(body);

        if (message) {
          return SnackEvent.dispatchByWarning(message);
        }

        const res = await credentialsHttpService.signin(body);

        if (res.ok === false) {
          return SnackEvent.dispatchByException(new CredentialsException(res.exception));
        }

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
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = credentialsValidator.signup(body);

        if (message) {
          return SnackEvent.dispatchByWarning(message);
        }

        const res = await credentialsHttpService.signup(body);

        if (res.ok === false) {
          return SnackEvent.dispatchByException(new CredentialsException(res.exception));
        }

        setCredentials(res.data);
      },
      [body, setCredentials],
    );
  }

  useUpdatePasswordCallback(body: CredentialsUpdatePasswordBody) {
    return useCallback(async () => {
      const message = credentialsValidator.updatePassword(body);

      if (message) {
        return SnackEvent.dispatchByWarning(message);
      }

      const res = await credentialsHttpService.updatePassword(body);

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }
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

      navigate(PagePath.SignIn, { replace: true });
      setCredentials(false);
    }, [navigate, setCredentials]);
  }

  useSignOutEffect() {
    const signout = this.useSignOutCallback();

    useEffect(() => {
      signout();
    }, [signout]);
  }
}

export const credentialsHook = new CredentialsHook();
