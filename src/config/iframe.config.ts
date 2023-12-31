export class IframeConfig {
  private readonly URL = process.env.REACT_APP_IFRAME_URL as string;

  getIframeSrc() {
    return this.URL;
  }
}
