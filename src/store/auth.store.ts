import { AuthStoreDto } from '@common';
import { RecoilStore } from '@core';

export class AuthStore extends RecoilStore<AuthStoreDto> {
  private static instance = new AuthStore(AuthStore.name, new AuthStoreDto());

  public static getInstance() {
    return this.instance;
  }
}
