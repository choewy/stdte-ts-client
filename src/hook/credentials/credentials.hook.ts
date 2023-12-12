import { FormEvent, useCallback, useEffect, useState } from 'react';

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
    const setCredentials = credentialsStore.useSetState();

    const getCredentials = useCallback(async () => {
      const res = await credentialsHttpService.credentials();

      if (res.ok === false) {
        setCredentials(false);

        return SnackEvent.dispatchByException(new CredentialsException(res.exception));
      }

      setCredentials(res.data);
    }, [setCredentials]);

    useEffect(() => {
      getCredentials();
    }, [getCredentials]);
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
}

export const credentialsHook = new CredentialsHook();
