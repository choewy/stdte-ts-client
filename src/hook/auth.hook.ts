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

      if (res.ok) {
        setAuthStore({
          ok: true,
          auth: {
            id: res.data.id,
            email: res.data.email,
            name: res.data.name,
          },
          role: res.data.role
            ? {
                id: res.data.role.id,
                name: res.data.role.name,
                rolePolicy: {
                  id: res.data.role.rolePolicy.id,
                  accessRole: res.data.role.rolePolicy.accessRole.value,
                  accessTeam: res.data.role.rolePolicy.accessTeam.value,
                  accessUser: res.data.role.rolePolicy.accessUser.value,
                  accessProject: res.data.role.rolePolicy.accessProject.value,
                },
              }
            : null,
        });
      } else {
        setAuthStore({ ok: false, auth: null, role: null });
      }
    }, [setAuthStore]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    useEffect(() => {
      if (location.pathname === PagePath.Home) {
        if (authStore.ok === false) {
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
