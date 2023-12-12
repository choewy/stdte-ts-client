import { FunctionComponent } from 'react';

import { credentialsHook } from '@hook';

export const SignOutPage: FunctionComponent = () => {
  credentialsHook.useSignOutEffect();

  return null;
};
