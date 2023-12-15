import { SxProps } from '@mui/material';

import { TableWidthOptions } from './types';

export class TableService {
  private getLengthByBytes(str: string) {
    let length = 0;

    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);

      if (c > 128) {
        length += 3;
      } else {
        length += 1;
      }
    }

    return length;
  }

  getWidthByTextLength(value: string | number | boolean, options: TableWidthOptions, sxProps: SxProps = {}): SxProps {
    let width = 0;

    const length = this.getLengthByBytes(String(value));

    width = 10 * length;

    return {
      width: options.width === true ? width : undefined,
      minWidth: options.minWidth === true ? width : undefined,
      maxWidth: options.maxWidth === true ? width : undefined,
      ...sxProps,
    };
  }

  getWidthByButtonTextLength(buttonTexts: string[], options: TableWidthOptions, sxProps: SxProps = {}): SxProps {
    let width = 0;

    for (const buttonText of buttonTexts) {
      const length = this.getLengthByBytes(buttonText);

      width += 10 * length;
    }

    return {
      width: options.width === true ? width : undefined,
      minWidth: options.minWidth === true ? width : undefined,
      maxWidth: options.maxWidth === true ? width : undefined,
      ...sxProps,
    };
  }
}

export const tableService = new TableService();
