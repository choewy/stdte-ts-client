import { Auth, Role } from '@common/constants';

export type SettingStoreValue = {
  helmetTitle: string;
  themeColor: string;
  gnbTitle: string;
  openSideMenu: boolean;
};

export type AuthStoreValue = {
  ok: null | boolean;
  auth: Auth | null;
  role: Role | null;
};
