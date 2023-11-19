import { Auth, AuthStatusValue, EmploymentStatusValue, Role } from '@common/constants';

export type SettingStoreValue = {
  helmetTitle: string;
  themeColor: string;
  gnbTitle: string;
  openSideMenu: boolean;
};

export type SignStoreValue = {
  ok: null | boolean;
  auth: Auth | null;
  role: Role | null;
  authStatus: AuthStatusValue;
  employmentStatus: EmploymentStatusValue;
};
