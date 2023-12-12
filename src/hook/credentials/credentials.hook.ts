import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CredentialsStatus, PagePath } from '@common';
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
import { CredentialsGuardPassOrPath } from './types';

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
    }, [pathname, setCredentials]);

    useEffect(() => {
      getCredentials();
    }, [getCredentials]);
  }

  useGuestOnlyGuard() {
    const credentials = credentialsStore.useValue();

    const [passOrPath, setPassOrPath] = useState<CredentialsGuardPassOrPath>(null);

    const check = useCallback(() => {
      if (credentials === null) {
        return setPassOrPath(null);
      }

      if (credentials) {
        return setPassOrPath(PagePath.Home);
      }

      setPassOrPath(true);
    }, [credentials, setPassOrPath]);

    useEffect(() => {
      check();
    }, [check]);

    return passOrPath;
  }

  useUserOnlyGuard() {
    const pathname = useLocation().pathname;
    const credentials = credentialsStore.useValue();

    const [passOrPath, setPassOrPath] = useState<CredentialsGuardPassOrPath>(null);

    const check = useCallback(() => {
      if (credentials === null) {
        return setPassOrPath(null);
      }

      if (credentials === false) {
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
          return setPassOrPath(PagePath.Wating);

        case CredentialsStatus.Reject:
          return setPassOrPath(PagePath.Rejected);

        case CredentialsStatus.Disable:
          return setPassOrPath(PagePath.Disabled);
      }
    }, [pathname, credentials, setPassOrPath]);

    useEffect(() => {
      check();
    }, [check]);

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
