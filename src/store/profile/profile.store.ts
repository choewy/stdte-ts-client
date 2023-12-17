import { RecoilStore } from '@core';
import { USER_ROW } from '@service';

import { ProfileStoreProps } from './types';

export class ProfileStore extends RecoilStore<ProfileStoreProps> {
  constructor() {
    super(ProfileStore.name, USER_ROW);
  }
}

export const profileStore = new ProfileStore();
