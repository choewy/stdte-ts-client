export class TableService {
  getWidthByLength(value: string | number | boolean) {
    const length = String(value).length;

    if (length < 5) {
      return length * 30;
    } else {
      return length * 10;
    }
  }
}

export const tableService = new TableService();
