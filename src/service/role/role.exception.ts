import { HttpClientException, HttpException } from '@core';

import { RoleErrorMessage } from './enums';

export class RoleException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.name = exception.name;
    this.status = exception.status;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.AlreadyExistRoleException:
        this.message = RoleErrorMessage.AlreadyExistRole;
        break;

      case HttpException.NotFoundRoleException:
        this.message = RoleErrorMessage.NotFoundRole;
        break;
    }
  }
}
