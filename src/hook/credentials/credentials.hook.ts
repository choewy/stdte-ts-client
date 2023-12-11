import { useCallback, useEffect } from 'react';

import { credentialsStore } from '@store';
import {
  CredentialsSignInBody,
  CredentialsSignUpBody,
  CredentialsUpdatePasswordBody,
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
        return console.debug('todo - send exception event');
      }

      setCredentials(res.data);
    }, [setCredentials]);

    useEffect(() => {
      getCredentials();
    }, [getCredentials]);
  }

  useSignInCallback(body: CredentialsSignInBody) {
    const setCredentials = credentialsStore.useSetState();

    return useCallback(async () => {
      const message = credentialsValidator.signin(body);

      if (message) {
        return console.debug(message);
      }

      const res = await credentialsHttpService.signin(body);

      if (res.ok === false) {
        return console.debug('todo - send exception event');
      }

      setCredentials(res.data);
    }, [body, setCredentials]);
  }

  useSignUpCallback(body: CredentialsSignUpBody) {
    const setCredentials = credentialsStore.useSetState();

    return useCallback(async () => {
      const message = credentialsValidator.signup(body);

      if (message) {
        return console.debug(message);
      }

      const res = await credentialsHttpService.signup(body);

      if (res.ok === false) {
        return;
      }

      setCredentials(res.data);
    }, [body, setCredentials]);
  }

  useUpdatePasswordCallback(body: CredentialsUpdatePasswordBody) {
    return useCallback(async () => {
      const message = credentialsValidator.updatePassword(body);

      if (message) {
        return console.debug(message);
      }

      const res = await credentialsHttpService.updatePassword(body);

      if (res.ok) {
        return console.debug('todo - send exception event');
      }
    }, [body]);
  }
}

export const credentialsHook = new CredentialsHook();
