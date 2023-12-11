import { isEmail, isEmpty } from 'class-validator';

import { CredentialsSignInBody, CredentialsSignUpBody, CredentialsUpdatePasswordBody } from './types';

export class CredentialsValidator {
  signin(body: CredentialsSignInBody) {
    if (isEmpty(body.email)) {
      return 'todo - send exception event';
    }

    if (isEmail(body.email) === false) {
      return 'todo - send exception event';
    }

    if (isEmpty(body.password)) {
      return 'todo - send exception event';
    }
  }

  signup(body: CredentialsSignUpBody) {
    if (isEmpty(body.name)) {
      return 'todo - send exception event';
    }

    if (isEmail(body.email) === false) {
      return 'todo - send exception event';
    }

    if (isEmpty(body.name)) {
      return 'todo - send exception event';
    }

    if (body.password !== body.confirmPassword) {
      return 'todo - send exception event';
    }
  }

  updatePassword(body: CredentialsUpdatePasswordBody) {
    if (isEmpty(body.currentPassword)) {
      return 'todo - send exception event';
    }

    if (isEmpty(body.newPassword)) {
      return 'todo - send exception event';
    }

    if (isEmpty(body.confirmPassword)) {
      return 'todo - send exception event';
    }

    if (body.newPassword !== body.confirmPassword) {
      return 'todo - send exception event';
    }
  }
}

export const credentialsValidator = new CredentialsValidator();
