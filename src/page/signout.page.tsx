import { Fragment, FunctionComponent } from 'react';

import { AuthHook } from '@hook';

export const SignOutPage: FunctionComponent = () => {
  AuthHook.getInstance().useSignout();

  return <Fragment />;
};
