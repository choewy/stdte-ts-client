export class LocalStorageService {
  private readonly EMAIL_KEY = '__stdte_ts_email';

  getEmail(): string {
    return localStorage.getItem(this.EMAIL_KEY) ?? '';
  }

  setEmail(email: string): void {
    localStorage.setItem(this.EMAIL_KEY, email);
  }
}

export const localStorageService = new LocalStorageService();
