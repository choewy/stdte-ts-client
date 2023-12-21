import { SetterOrUpdater } from 'recoil';
import { MouseEvent, useCallback, useEffect, useState } from 'react';

import { ProfileStoreProps, profileStore } from '@store';
import { SnackEvent, UserException, userHttpService, userTransformer, userValidator } from '@service';

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
      phone: '',
      scienceNumber: '',
      enteringDay: '',
      resignationDay: '',
    });

    useEffect(() => {
      setBody({
        name: profile.name,
        birthday: profile.birthday,
        phone: profile.phone,
        scienceNumber: profile.scienceNumber,
        enteringDay: profile.enteringDay,
        resignationDay: profile.resignationDay,
      });
    }, [profile, setBody]);

    return [body, setBody];
  }

  useUpdatePersonal(body: ProfilePersonalState) {
    const setProfile = profileStore.useSetState();

    return useCallback(
      async (_: MouseEvent<HTMLButtonElement>) => {
        const message = userValidator.update(body);

        if (message) {
          return SnackEvent.dispatchByWarning(message);
        }

        const res = await userHttpService.updateMyProfile(userTransformer.updateRow(body));

        if (res.ok === false) {
          return SnackEvent.dispatchByException(new UserException(res.exception));
        }

        SnackEvent.dispatchBySuccess('인적사항이 저장되었습니다.');

        setProfile((prev) => ({ ...prev, ...body }));
      },
      [body, setProfile],
    );
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

  useUpdateEducational(body: ProfileEducationalState) {
    const setProfile = profileStore.useSetState();

    return useCallback(
      async (_: MouseEvent<HTMLButtonElement>) => {
        const message = userValidator.update(body);

        if (message) {
          return SnackEvent.dispatchByWarning(message);
        }

        const res = await userHttpService.updateMyProfile(userTransformer.updateRow(body));

        if (res.ok === false) {
          return SnackEvent.dispatchByException(new UserException(res.exception));
        }

        SnackEvent.dispatchBySuccess('학력사항이 저장되었습니다.');

        setProfile((prev) => ({ ...prev, ...body }));
      },
      [body, setProfile],
    );
  }

  useBehicleState(profile: ProfileStoreProps): [ProfileBehcleState, SetterOrUpdater<ProfileBehcleState>] {
    const [body, setBody] = useState<ProfileBehcleState>({ carType: '', carNumber: '' });

    useEffect(() => {
      setBody({ carType: profile.carType, carNumber: profile.carNumber });
    }, [profile, setBody]);

    return [body, setBody];
  }

  useUpdateBehicle(body: ProfileBehcleState) {
    const setProfile = profileStore.useSetState();

    return useCallback(
      async (_: MouseEvent<HTMLButtonElement>) => {
        const message = userValidator.update(body);

        if (message) {
          return SnackEvent.dispatchByWarning(message);
        }

        const res = await userHttpService.updateMyProfile(userTransformer.updateRow(body));

        if (res.ok === false) {
          return SnackEvent.dispatchByException(new UserException(res.exception));
        }

        SnackEvent.dispatchBySuccess('차량정보가 저장되었습니다.');

        setProfile((prev) => ({ ...prev, ...body }));
      },
      [body, setProfile],
    );
  }
}

export const profileHook = new ProfileHook();
