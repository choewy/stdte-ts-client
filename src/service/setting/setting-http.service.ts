import { HttpService } from '@core';

import { SettingResponse, SettingUpdateBody } from './types';

export class SettingHttpService extends HttpService {
  async getSetting() {
    return this.get<SettingResponse>(this.url());
  }

  async updateSetting(body: SettingUpdateBody) {
    return this.patch<null>(this.url(), body);
  }
}

export const settingHttpService = new SettingHttpService('setting');
