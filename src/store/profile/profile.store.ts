import { CredentialsStatus, UserStatus } from '@common';
import { RecoilStore } from '@core';

import { ProfileStoreProps } from './types';

export class ProfileStore extends RecoilStore<ProfileStoreProps> {
  constructor() {
    super(ProfileStore.name, {
      id: 0,
      name: '',
      phone: '',
      gender: '',
      birthday: '',
      scienceNumber: '',
      degree: '',
      school: '',
      major: '',
      carType: '',
      carNumber: '',
      enteringDay: '',
      resignationDay: '',
      status: UserStatus.Wating,
      credentials: {
        email: '',
        status: CredentialsStatus.Wating,
      },
      role: null,
      createdAt: '',
      updatedAt: '',
    });
  }
}

export const profileStore = new ProfileStore();
