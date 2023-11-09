import { HttpStatusCode } from 'axios';

export class ApiException {
  message: string;
  statusCode: HttpStatusCode;
  error: string;
  details?: {
    name: string;
    message: string;
  };
}
