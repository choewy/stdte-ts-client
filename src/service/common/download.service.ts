import { HttpClientDownloadResponse } from '@core';

export class DownloadService {
  private createAnchor(url: string, filename: string) {
    const anchor = document.createElement('a');

    anchor.href = url;
    anchor.download = filename;
    anchor.style.setProperty('display', 'none');

    return anchor;
  }

  private clickAnchor(anchor: HTMLAnchorElement) {
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  download(data: HttpClientDownloadResponse) {
    this.clickAnchor(this.createAnchor(data.url, data.filename));
  }
}

export const downloadService = new DownloadService();
