import { HttpService } from '@core';

export class TimeMemoHttpService extends HttpService {}

export const timeMemoHttpService = new TimeMemoHttpService('times');
