export class LocalStorageService {
  private readonly EMAIL = '_stdte_ts_email';
  private readonly THEME = '_stdte_ts_theme';

  getEmail() {
    return localStorage.getItem(this.EMAIL) ?? '';
  }

  setEmail(email: string) {
    return localStorage.setItem(this.EMAIL, email);
  }

  getTheme() {
    return localStorage.getItem(this.THEME);
  }

  setTheme(theme: string) {
    return localStorage.setItem(this.THEME, theme);
  }
}

export const localStorageService = new LocalStorageService();
