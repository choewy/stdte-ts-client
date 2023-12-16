import { HttpClientException, HttpException } from '@core';

import { BusinessCategoryErrorMessage } from './enums';

export class BusinessCategoryException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.AlreadyExistBusinessCategoryException:
        this.message = BusinessCategoryErrorMessage.AlreadyExist;
        break;

      case HttpException.NotFoundBusinessCategoryException:
        this.message = BusinessCategoryErrorMessage.NotFound;
        break;
    }
  }
}
