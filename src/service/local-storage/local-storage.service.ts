export class LocalStorageService {
  private readonly EMAIL = '_stdte_ts_email';

  getEmail() {
    return localStorage.getItem(this.EMAIL) ?? '';
  }

  setEmail(email: string) {
    return localStorage.setItem(this.EMAIL, email);
  }
}

export const localStorageService = new LocalStorageService();
