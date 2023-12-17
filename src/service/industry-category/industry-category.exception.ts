import { HttpClientException, HttpException } from '@core';

import { IndustryCategoryErrorMessage } from './enums';

export class IndustryCategoryException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.AlreadyExistIndustryCategoryException:
        this.message = IndustryCategoryErrorMessage.AlreadyExist;
        break;

      case HttpException.NotFoundIndustryCategoryException:
        this.message = IndustryCategoryErrorMessage.NotFound;
        break;
    }
  }
}
