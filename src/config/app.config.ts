import { AppEnv } from './enums';

export class AppConfig {
  private readonly ENV = process.env.REACT_APP_ENV as AppEnv;
  private readonly SERVER_URL = process.env.REACT_APP_SERVER_URL;

  getAppEnv() {
    return this.ENV;
  }

  getServerUrl(): string {
    return this.SERVER_URL ?? '';
  }
}
