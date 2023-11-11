export class HashService {
  private static instance = new HashService();

  public static getInstance(): HashService {
    return this.instance;
  }

  toHex(data: string): string {
    return Buffer.from(data, 'utf-8').toString('hex');
  }
}
