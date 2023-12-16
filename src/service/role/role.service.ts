import { RolePolicyKey, RolePolicyLevel } from '@common';
import { CredentialsStoreProps } from '@store';

export class RoleService {
  can(credentials: CredentialsStoreProps, roleKey: RolePolicyKey, rolePolicyLevel: RolePolicyLevel) {
    if (credentials === null || credentials === false) {
      return false;
    }

    if (credentials.role == null) {
      return false;
    }

    return credentials.role.rolePolicy[roleKey] >= rolePolicyLevel;
  }
}

export const roleService = new RoleService();
