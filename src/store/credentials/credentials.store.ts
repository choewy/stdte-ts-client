import { RecoilStore } from '@core';
import { CredentialsResponse } from '@service';

export class CredentialsStore extends RecoilStore<CredentialsResponse | null | false> {
  constructor() {
    super(CredentialsStore.name, null);
  }
}

export const credentialsStore = new CredentialsStore();
