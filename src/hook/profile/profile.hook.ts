import { useCallback, useEffect } from 'react';

import { profileStore } from '@store';
import { SnackEvent, UserException, userHttpService } from '@service';

export class ProfileHook {
  useGetMyProfileCallback() {
    const setProfile = profileStore.useSetState();

    return useCallback(async () => {
      const res = await userHttpService.getMyProfile();

      if (res.ok === false) {
        return SnackEvent.dispatchByException(new UserException(res.exception));
      }

      setProfile(res.data);
    }, [setProfile]);
  }

  useMyProfile() {
    const getMyProfile = this.useGetMyProfileCallback();

    useEffect(() => {
      getMyProfile();
    }, [getMyProfile]);
  }
}

export const profileHook = new ProfileHook();
