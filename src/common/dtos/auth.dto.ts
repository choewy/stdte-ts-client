import { ApiException } from './api-exception.dto';

export class AuthCheckResponseDto {
  ok: boolean;
  failReason?: ApiException;
}
