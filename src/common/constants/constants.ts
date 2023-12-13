import { CredentialsStatus } from './enums';

export const ROLE_POLICY_KEY = [
  'credentials',
  'roleAndPolicy',
  'setting',
  'customer',
  'user',
  'taskCategory',
  'industryCategory',
  'businessCategory',
  'project',
] as const;

export const CREDENTIALS_STATUS_VALUES = Object.values(CredentialsStatus)
  .filter((status) => typeof status === 'number')
  .sort() as CredentialsStatus[];
