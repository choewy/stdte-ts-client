import { HttpClientException, HttpException } from '@core';

import { TaskCategoryErrorMessage } from './enums';

export class TaskCategoryException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.AlreadyExistTaskMainCategoryException:
        this.message = TaskCategoryErrorMessage.AlreadyExist;
        break;

      case HttpException.NotFoundTaskMainCategoryException:
        this.message = TaskCategoryErrorMessage.NotFound;
        break;

      case HttpException.NotFoundTaskSubCategoryException:
        this.message = TaskCategoryErrorMessage.NotFoundChild;
        break;
    }
  }
}
