import { ROLE_POLICY_KEY } from './constants';
import { RolePolicyLevel } from './enums';

export type RolePolicyKey = (typeof ROLE_POLICY_KEY)[number];
export type RolePolicyProperty = Record<RolePolicyKey, RolePolicyLevel>;
