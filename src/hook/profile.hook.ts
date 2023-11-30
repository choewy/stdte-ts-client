import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

import { NotiEvent, Profile } from '@common';
import { profileApiService } from '@service';
import { SetterOrUpdater } from 'recoil';

export class ProfileHook {
  useGetMyProfileCallback(setProfile: Dispatch<SetStateAction<Profile | null>> | SetterOrUpdater<Profile | null>) {
    return useCallback(async () => {
      const { ok, data, exception } = await profileApiService.getMyProfile();

      if (ok === false) {
        return NotiEvent.dispatchException(exception);
      }

      setProfile(data);
    }, []);
  }

  useGetMyProfile(): Profile | null {
    const [profile, setProfile] = useState<Profile | null>(null);

    const getMyProfile = this.useGetMyProfileCallback(setProfile);

    useEffect(() => {
      getMyProfile();
    }, []);

    return profile;
  }
}

export const profileHook = new ProfileHook();
