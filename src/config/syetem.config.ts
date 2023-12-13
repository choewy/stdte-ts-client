export class SystemConfig {
  private readonly TIMEZONE = process.env.REACT_APP_TIMEZONE as string;

  getTimezone() {
    return this.TIMEZONE;
  }
}
