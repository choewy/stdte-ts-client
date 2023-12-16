import { CredentialsStatus, RolePolicyLevel, UserStatus } from '@common';
import { RoleAdminRowResponse, UserRowResponse } from '@service';

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

export const DIALOG_DEFAULT_USER_ROW: UserRowResponse = {
  id: 0,
  name: '',
  phone: '',
  gender: '',
  birthday: '',
  scienceNumber: '',
  degree: '',
  school: '',
  major: '',
  carType: '',
  carNumber: '',
  enteringDay: '',
  resignationDay: '',
  status: UserStatus.Wating,
  credentials: {
    email: '',
    status: CredentialsStatus.Wating,
  },
  role: null,
  createdAt: '',
  updatedAt: '',
};
