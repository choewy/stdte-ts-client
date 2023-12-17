import { HttpClientException, HttpException } from '@core';

import { CustomerErrorMessage } from './enums';

export class CustomerException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.NotFoundCustomerException:
        this.message = CustomerErrorMessage.NotFound;
        break;
    }
  }
}
