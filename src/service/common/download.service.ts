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

  download(url: string, filename: string) {
    this.clickAnchor(this.createAnchor(url, filename));
  }
}

export const downloadService = new DownloadService();
