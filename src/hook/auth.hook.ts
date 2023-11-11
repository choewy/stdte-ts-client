import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PagePath } from '@common';
import { AuthStore } from '@store';
import { AuthApiService } from '@service';
import { AuthStoreValue } from '@store';

export class AuthHook {
  private static instance = new AuthHook();

  public static getInstance() {
    return this.instance;
  }

  useAuthCheck(): void {
    const setAuthStore = AuthStore.getInstance().useSetState();

    const checkAuth = useCallback(async () => {
      const response = await AuthApiService.getInstance().checkAuth();

      if (response.ok === false) {
        return setAuthStore({ ok: false, auth: null, role: null });
      }

      const authStoreValue: AuthStoreValue = {
        ok: true,
        auth: null,
        role: null,
      };

      if (response.data) {
        authStoreValue.auth = {
          id: response.data.id,
          email: response.data.email,
          name: response.data.name,
        };
      }

      if (response.data.role) {
        authStoreValue.role = {
          id: response.data.role.id,
          name: response.data.role.name,
          rolePolicy: null,
        };
      }

      if (response.data.role?.rolePolicy) {
        authStoreValue.role.rolePolicy = {
          id: response.data.role.rolePolicy.id,
          accessRole: response.data.role.rolePolicy.accessRole.value,
          accessTeam: response.data.role.rolePolicy.accessTeam.value,
          accessUser: response.data.role.rolePolicy.accessUser.value,
          accessProject: response.data.role.rolePolicy.accessProject.value,
        };
      }

      setAuthStore(authStoreValue);
    }, [setAuthStore]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);
  }

  useAuthGuard(): void {
    const location = useLocation();
    const navigate = useNavigate();

    const { ok } = AuthStore.getInstance().useValue();

    useEffect(() => {
      if (location.pathname === PagePath.Home) {
        if (ok === false) {
          navigate(PagePath.SignIn, { replace: true });
        }

        return;
      }

      if ([PagePath.SignIn, PagePath.SignUp].includes(location.pathname as PagePath)) {
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
    }, [location.pathname, ok, navigate]);
  }

  useSignout(): void {
    const resetAuthStore = AuthStore.getInstance().useResetState();

    const signout = useCallback(async () => {
      await AuthApiService.getInstance().signout();
      resetAuthStore();
    }, [resetAuthStore]);

    useEffect(() => {
      signout();
    }, [signout]);
  }
}
