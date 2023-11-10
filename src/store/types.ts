import { Auth, Role } from '@common/constants';

export type SettingStoreValue = {
  title: string;
  themeColor: string;
};

export type AuthStoreValue = {
  ok: null | boolean;
  auth: Auth | null;
  role: Role | null;
};
