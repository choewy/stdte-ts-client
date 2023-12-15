import { RolePolicyLevel } from '@common';
import { RoleAdminRowResponse } from '@service';

export const DIALOG_DEFAULT_ROLE_ROW: RoleAdminRowResponse = {
  id: 0,
  name: '',
  users: [],
  rolePolicy: {
    roleAndPolicy: RolePolicyLevel.Limit,
    credentials: RolePolicyLevel.Limit,
    user: RolePolicyLevel.Limit,
    project: RolePolicyLevel.Limit,
    customer: RolePolicyLevel.Limit,
    businessCategory: RolePolicyLevel.Limit,
    industryCategory: RolePolicyLevel.Limit,
    taskCategory: RolePolicyLevel.Limit,
    setting: RolePolicyLevel.Limit,
  },
  createdAt: '',
  updatedAt: '',
};
