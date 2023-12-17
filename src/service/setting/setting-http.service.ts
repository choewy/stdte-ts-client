import { HttpService } from '@core';

import { SettingRow, SettingUpdateBody } from './types';

export class SettingHttpService extends HttpService {
  async getRow() {
    return this.get<SettingRow>(this.url());
  }

  async updateRow(body: SettingUpdateBody) {
    return this.patch<null>(this.url(), body);
  }
}

export const settingHttpService = new SettingHttpService('setting');
