import { HttpClientException, HttpErrorMessage, HttpException } from '@core';

export class SelectException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.InvalidCredentialsException:
        this.message = HttpErrorMessage.InvalidCredentials;
        break;
    }
  }
}
