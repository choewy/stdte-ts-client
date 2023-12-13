import { HttpClientException, HttpException } from '@core';
import { CredentialsErrorMessage } from './enums';

export class CredentialsException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException, invalidMessage?: string) {
    this.name = exception.name;
    this.status = exception.status;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.InvalidCredentialsException:
        this.message = invalidMessage ?? CredentialsErrorMessage.InvalidCredentials;
        break;

      case HttpException.AlreadyExistUserEmailException:
        this.message = CredentialsErrorMessage.AlreadyExistUserEmail;
        break;

      case HttpException.IncorrectPasswordException:
        this.message = CredentialsErrorMessage.IncorrectPassword;
        break;

      case HttpException.NotFoundUserException:
        this.message = CredentialsErrorMessage.NotFoundUser;
        break;
    }
  }
}
