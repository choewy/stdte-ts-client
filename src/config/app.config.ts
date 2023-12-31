import { AppEnv } from './enums';

export class AppConfig {
  private readonly ENV = process.env.REACT_APP_ENV as AppEnv;
  private readonly VERSION = process.env.REACT_APP_VERSION as string;
  private readonly URL = process.env.REACT_APP_URL as string;
  private readonly SERVER_URL = process.env.REACT_APP_SERVER_URL;

  getAppEnv() {
    return this.ENV;
  }

  getAppVersion() {
    return this.VERSION;
  }

  getAppUrl() {
    return this.URL;
  }

  getServerUrl(): string {
    return this.SERVER_URL ?? '';
  }
}
