import { BusinessCategoryRowResponse, RoleAdminRowResponse, UserRowResponse } from '@service';

export type DialogStoreProps = {
  mypage: {
    updatePassword: { open: boolean };
  };
  credentials: {
    updatePassword: { id: number; open: boolean };
  };
  role: {
    create: { open: boolean };
    users: { open: boolean; row: RoleAdminRowResponse };
    update: { open: boolean; row: RoleAdminRowResponse };
    delete: { open: boolean; row: RoleAdminRowResponse };
  };
  user: { update: { open: boolean; row: UserRowResponse } };
  businessCategory: {
    create: { open: boolean };
    update: { open: boolean; row: BusinessCategoryRowResponse };
    delete: { open: boolean; row: BusinessCategoryRowResponse };
  };
  industryCategory: {
    create: { open: boolean };
    update: { open: boolean; row: BusinessCategoryRowResponse };
    delete: { open: boolean; row: BusinessCategoryRowResponse };
  };
};
