export class HashService {
  private static instance = new HashService();

  public static getInstance(): HashService {
    return this.instance;
  }

  toBase64(data: string): string {
    return Buffer.from(data, 'utf-8').toString('base64');
  }
}
