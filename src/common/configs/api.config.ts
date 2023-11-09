export class ApiConfig {
  private readonly REACT_APP_HTTP_API_URL = process.env.REACT_APP_HTTP_API_URL;

  public getHttpApiUrl(): string {
    return this.REACT_APP_HTTP_API_URL;
  }
}
