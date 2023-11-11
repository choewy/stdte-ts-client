import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export class NavigateHook {
  private static instance = new NavigateHook();

  public static getInstance() {
    return this.instance;
  }

  useNavigateCallback(path: string, replace?: boolean) {
    const navigate = useNavigate();

    return useCallback(() => {
      navigate(path, { replace });
    }, [navigate]);
  }
}

export const navigateHook = NavigateHook.getInstance();
