export class HashService {
  toHex(data: string): string {
    return Buffer.from(data, 'utf-8').toString('hex');
  }
}

export const hashService = new HashService();
