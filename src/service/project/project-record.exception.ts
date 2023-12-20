import { HttpClientException, HttpException } from '@core';

import { ProjectRecordErrorMessage } from './enums';

export class ProjectRecordException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.NotFoundProjectException:
        this.message = ProjectRecordErrorMessage.NotFoundProject;
        break;

      case HttpException.NotFoundProjectOrderRecordException:
        this.message = ProjectRecordErrorMessage.NotFoundOrder;
        break;

      case HttpException.NotFoundProjectSaleRecordException:
        this.message = ProjectRecordErrorMessage.NotFoundSale;
        break;
    }
  }
}
