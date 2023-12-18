import { HttpClientException, HttpException } from '@core';

import { ProjectErrorMessage } from './enums';

export class ProjectException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.AlreadyExistProjectCodeException:
        this.message = ProjectErrorMessage.AlreadyExist;
        break;

      case HttpException.NotFoundProjectException:
        this.message = ProjectErrorMessage.NotFound;
        break;
    }
  }
}
