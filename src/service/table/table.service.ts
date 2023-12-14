import { SxProps } from '@mui/material';

import { TableWidthOptions } from './types';

export class TableService {
  getWidthByTextLength(value: string | number | boolean, options: TableWidthOptions, sxProps: SxProps = {}): SxProps {
    let width = 0;

    const length = String(value).length;

    if (length < 6) {
      width = length * 30;
    } else {
      width = length * 10;
    }

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
      const length = buttonText.length;

      if (length < 4) {
        width += 65;
      } else {
        width += 20 * length;
      }
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
