import {
  ApiListQuery,
  Auth,
  AuthStatus,
  EmploymentStatus,
  HttpRequestLog,
  HttpRequestLogQuery,
  NotiEventDetail,
  QueryOrder,
  Role,
  RoleRow,
} from '@common';

import { HttpRequestLogStoreValue, RoleStoreValue, SettingStoreValue, SignStoreValue } from './types';

export class SettingStoreValueGenerator implements SettingStoreValue {
  helmetTitle: string = '';
  themeColor: string = '#A00';
  gnbTitle: string = '';
  openSideMenu: boolean = false;

  constructor(prev?: SettingStoreValue) {
    if (prev) {
      this.helmetTitle = prev.helmetTitle;
      this.themeColor = prev.themeColor;
      this.gnbTitle = prev.gnbTitle;
      this.openSideMenu = prev.openSideMenu;
    }
  }

  setTitles(title: string): this {
    this.helmetTitle = title;
    this.gnbTitle = title;

    return this;
  }

  setThemeColor(themeColor: string): this {
    this.themeColor = themeColor;

    return this;
  }

  setOpenSideMenu(openSideMenu: boolean): this {
    this.openSideMenu = openSideMenu;

    return this;
  }
}

export class SignStoreValueGenerator implements SignStoreValue {
  ok: null | boolean = null;
  auth: Auth | null = null;
  role: Role | null = null;
  authStatus: AuthStatus = AuthStatus.Wating;
  employmentStatus: EmploymentStatus = EmploymentStatus.Wating;

  constructor(prev?: SignStoreValue) {
    if (prev) {
      this.ok = prev.ok;
      this.auth = prev.auth;
      this.role = prev.role;
      this.authStatus = prev.authStatus;
      this.employmentStatus = prev.employmentStatus;
    }
  }

  setOk(ok: boolean): this {
    this.ok = ok;

    return this;
  }

  setAuth(auth: Auth): this {
    this.auth = {
      id: auth.id,
      name: auth.name,
      email: auth.email,
      authStatus: auth.authStatus,
      employmentStatus: auth.employmentStatus,
    };

    this.authStatus = auth.authStatus;
    this.employmentStatus = auth.employmentStatus;

    return this;
  }

  setRole(role: Role | null): this {
    this.role = role;

    return this;
  }
}

export class NotiEventsStoreValueGenerator extends Array<NotiEventDetail> {
  constructor(prev?: NotiEventDetail[]) {
    super();

    if (prev) {
      Object.assign(this, prev);
    }
  }

  append(notiEventDetail: NotiEventDetail): this {
    this.push(notiEventDetail);

    return this;
  }

  remove(id: string): NotiEventsStoreValueGenerator {
    return new NotiEventsStoreValueGenerator(this.filter((noti) => noti.id !== id));
  }
}

export class HttpRequestLogStoreValueGenerator implements HttpRequestLogStoreValue {
  total: number = 0;
  rows: HttpRequestLog[] = [];
  query: HttpRequestLogQuery = {
    skip: 0,
    take: 20,
    methods: [],
    statusCodes: [],
    order: QueryOrder.Desc,
  };

  constructor(prev?: HttpRequestLogStoreValue) {
    if (prev) {
      this.total = prev.total;
      this.rows = prev.rows;
      this.query = prev.query;
    }
  }

  setTotal(total: number): this {
    this.total = total;

    return this;
  }

  setRows(rows: HttpRequestLog[]): this {
    this.rows = rows;

    return this;
  }

  setQuery(query: HttpRequestLogQuery): this {
    this.query = query;

    return this;
  }
}

export class RoleStoreValueGenerator implements RoleStoreValue {
  total: number = 0;
  rows: RoleRow[] = [];
  query: ApiListQuery = {
    skip: 0,
    take: 20,
  };

  constructor(prev?: RoleStoreValue) {
    if (prev) {
      this.total = prev.total;
      this.rows = prev.rows;
      this.query = prev.query;
    }
  }

  setTotal(total: number): this {
    this.total = total;

    return this;
  }

  setRows(rows: RoleRow[]): this {
    this.rows = rows;

    return this;
  }

  setQuery(query: ApiListQuery): this {
    this.query = query;

    return this;
  }
}
