import { CredentialsStatus, RolePolicyLevel } from './enums';

export const ROLE_POLICY_KEY = [
  'roleAndPolicy',
  'credentials',
  'user',
  'project',
  'customer',
  'businessCategory',
  'industryCategory',
  'taskCategory',
  'setting',
] as const;

export const CREDENTIALS_STATUS_VALUES = Object.values(CredentialsStatus)
  .filter((status) => typeof status === 'number')
  .sort() as CredentialsStatus[];

export const ROLE_POLICY_LEVEL_VALUES = Object.values(RolePolicyLevel)
  .filter((level) => typeof level === 'number')
  .sort() as RolePolicyLevel[];

export const ROLE_POLICY_EDITABLE_VALUES = ROLE_POLICY_LEVEL_VALUES.filter(
  (level) => level !== RolePolicyLevel.Developer,
);
