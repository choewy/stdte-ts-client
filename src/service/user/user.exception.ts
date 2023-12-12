import { HttpClientException, HttpException } from '@core';

import { UserrrorMessage } from './enums';

export class UserException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.NotFoundUserException:
        this.message = UserrrorMessage.NotFoundUser;
        break;
    }
  }
}
