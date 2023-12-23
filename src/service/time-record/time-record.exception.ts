import { HttpClientException, HttpException } from '@core';

import { TimeRecordErrorMessage } from './enums';

export class TimeRecordException implements HttpClientException {
  status: number;
  name: string;
  message: string;

  constructor(exception: HttpClientException) {
    this.status = exception.status;
    this.name = exception.name;
    this.message = exception.message;

    switch (exception.name) {
      case HttpException.OverTimeRecordSumException:
        this.message = TimeRecordErrorMessage.OverTime;
        break;
    }
  }
}
