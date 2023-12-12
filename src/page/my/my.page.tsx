import { FunctionComponent } from 'react';

import { PageContainer } from '@component';
import { layoutStore } from '@store';
import { profileHook } from '@hook';

import { MyPageCards, MyPageUpdatePasswordDialog } from './components';

export const MyPage: FunctionComponent = () => {
  const size = layoutStore.useValue().size;

  profileHook.useMyProfile();

  return (
    <PageContainer maxWidth={size.innerWidth > 768 ? 'lg' : 'xl'}>
      <MyPageUpdatePasswordDialog />
      <MyPageCards />
    </PageContainer>
  );
};
