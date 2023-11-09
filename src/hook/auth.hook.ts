import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PagePath } from '@common';
import { AuthStore } from '@store';
import { AuthApiService } from '@service';

export class AuthHook {
  private static instance = new AuthHook();

  public static getInstance() {
    return this.instance;
  }

  useAuthGuard(): void {
    const location = useLocation();
    const navigate = useNavigate();

    const [authStore, setAuthStore] = AuthStore.getInstance().useState();

    const checkAuth = useCallback(async () => {
      const res = await AuthApiService.getInstance().checkAuth();

      setAuthStore((prev) => ({ ...prev, ok: res.ok }));
    }, [setAuthStore]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    useEffect(() => {
      if (location.pathname === PagePath.Home) {
        if (authStore.ok === null || authStore.ok === false) {
          navigate(PagePath.SignIn, { replace: true });
        }

        return;
      }

      if ([PagePath.SignIn, PagePath.SignUp].includes(location.pathname as PagePath)) {
        if (authStore.ok === null || authStore.ok === false) {
          return;
        }

        navigate(PagePath.Home, { replace: true });
      } else {
        if (authStore.ok === true) {
          return;
        }

        navigate(PagePath.SignIn, { replace: true });
      }
    }, [location.pathname, authStore.ok, navigate]);
  }
}
