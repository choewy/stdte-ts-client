import { RoleErrorMessage } from './enums';

export class RoleValidator {
  create() {
    return RoleErrorMessage.EmptyRoleName;
  }

  update() {
    return RoleErrorMessage.EmptyRoleName;
  }
}

export const roleValidator = new RoleValidator();
