import { isEmail, isEmpty } from 'class-validator';

import {
  CredentialsAdminUpdatePasswordBody,
  CredentialsSignInBody,
  CredentialsSignUpBody,
  CredentialsUpdatePasswordBody,
} from './types';
import { CredentialsErrorMessage } from './enums';

export class CredentialsValidator {
  signin(body: CredentialsSignInBody) {
    if (isEmpty(body.email)) {
      return CredentialsErrorMessage.EmptyEmail;
    }

    if (isEmail(body.email) === false) {
      return CredentialsErrorMessage.InvalidEmail;
    }

    if (isEmpty(body.password)) {
      return CredentialsErrorMessage.EmptyPassword;
    }
  }

  signup(body: CredentialsSignUpBody) {
    if (isEmpty(body.email)) {
      return CredentialsErrorMessage.EmptyEmail;
    }

    if (isEmail(body.email) === false) {
      return CredentialsErrorMessage.InvalidEmail;
    }

    if (isEmpty(body.name)) {
      return CredentialsErrorMessage.EmptyName;
    }

    if (isEmpty(body.password)) {
      return CredentialsErrorMessage.EmptyPassword;
    }

    if (isEmpty(body.confirmPassword)) {
      return CredentialsErrorMessage.EmptyConfirmPassword;
    }

    if (body.password !== body.confirmPassword) {
      return CredentialsErrorMessage.IncorrectPassword;
    }
  }

  updatePassword(body: CredentialsUpdatePasswordBody) {
    if (isEmpty(body.currentPassword)) {
      return CredentialsErrorMessage.EmptyCurrentPassword;
    }

    if (isEmpty(body.newPassword)) {
      return CredentialsErrorMessage.EmptyNewPassword;
    }

    if (isEmpty(body.confirmPassword)) {
      return CredentialsErrorMessage.EmptyConfirmPassword;
    }

    if (body.newPassword !== body.confirmPassword) {
      return CredentialsErrorMessage.IncorrectPassword;
    }
  }

  updatePasswordByAdmin(body: CredentialsAdminUpdatePasswordBody) {
    if (isEmpty(body.newPassword)) {
      return CredentialsErrorMessage.EmptyNewPassword;
    }

    if (isEmpty(body.confirmPassword)) {
      return CredentialsErrorMessage.EmptyConfirmPassword;
    }

    if (body.newPassword !== body.confirmPassword) {
      return CredentialsErrorMessage.IncorrectPassword;
    }
  }
}

export const credentialsValidator = new CredentialsValidator();
