import { RolePolicyKey, RolePolicyLevel } from '@common';
import { AuzhorizeStoreProps } from '@store';

export class RoleService {
  can(authorize: AuzhorizeStoreProps, roleKey: RolePolicyKey, rolePolicyLevel: RolePolicyLevel) {
    if (authorize === null || authorize === false) {
      return false;
    }

    if (authorize.role == null) {
      return false;
    }

    return authorize.role.rolePolicy[roleKey] >= rolePolicyLevel;
  }
}

export const roleService = new RoleService();
