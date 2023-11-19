import { FunctionComponent } from 'react';

import { authHook } from '@hook';

const SignOutPage: FunctionComponent = () => {
  authHook.useSignout();

  return null;
};

export default SignOutPage;
