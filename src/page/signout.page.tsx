import { FunctionComponent } from 'react';

import { AuthHook } from '@hook';

const SignOutPage: FunctionComponent = () => {
  AuthHook.getInstance().useSignout();

  return null;
};

export default SignOutPage;
