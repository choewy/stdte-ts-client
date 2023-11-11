export class LocalStorageService {
  private static instance = new LocalStorageService();

  public static getInstance() {
    return this.instance;
  }

  private readonly EMAIL_KEY = '__stdte_ts_email';

  getEmail(): string {
    return localStorage.getItem(this.EMAIL_KEY) ?? '';
  }

  setEmail(email: string): void {
    localStorage.setItem(this.EMAIL_KEY, email);
  }
}
