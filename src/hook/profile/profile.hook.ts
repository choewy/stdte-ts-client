import { SetterOrUpdater } from 'recoil';
import { useCallback, useEffect, useState } from 'react';

import { ProfileStoreProps, profileStore } from '@store';
import { SnackEvent, UserException, userHttpService } from '@service';

import { ProfileBehcleState, ProfileEducationalState, ProfilePersonalState } from './types';

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

  usePersonalState(profile: ProfileStoreProps): [ProfilePersonalState, SetterOrUpdater<ProfilePersonalState>] {
    const [body, setBody] = useState<ProfilePersonalState>({
      name: '',
      birthday: '',
      gender: '',
      phone: '',
      scienceNumber: '',
      enteringDay: '',
      resignationDay: '',
    });

    useEffect(() => {
      setBody({
        name: profile.name,
        birthday: profile.birthday,
        gender: profile.gender,
        phone: profile.phone,
        scienceNumber: profile.scienceNumber,
        enteringDay: profile.enteringDay,
        resignationDay: profile.resignationDay,
      });
    }, [profile, setBody]);

    return [body, setBody];
  }

  useEducationalState(profile: ProfileStoreProps): [ProfileEducationalState, SetterOrUpdater<ProfileEducationalState>] {
    const [body, setBody] = useState<ProfileEducationalState>({
      degree: '',
      school: '',
      major: '',
    });

    useEffect(() => {
      setBody({
        degree: profile.degree,
        school: profile.school,
        major: profile.major,
      });
    }, [profile, setBody]);

    return [body, setBody];
  }

  useBehicleState(profile: ProfileStoreProps): [ProfileBehcleState, SetterOrUpdater<ProfileBehcleState>] {
    const [body, setBody] = useState<ProfileBehcleState>({ carType: '', carNumber: '' });

    useEffect(() => {
      setBody({ carType: profile.carType, carNumber: profile.carNumber });
    }, [profile, setBody]);

    return [body, setBody];
  }
}

export const profileHook = new ProfileHook();
