import { SxProps } from '@mui/material';

import { ComponentWidthOptions } from './types';

export class SizeService {
  private getTextLengthByBytes(str: string) {
    let length = 0;

    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);

      if (c > 128) {
        length += 2;
      } else {
        length += 1;
      }
    }

    return length;
  }

  getWidthByTextLength(
    value: string | number | boolean,
    options: ComponentWidthOptions,
    sxProps: SxProps = {},
    min?: number,
  ): SxProps {
    let width = 0;

    const length = this.getTextLengthByBytes(String(value));

    width = 9 * length;

    if (typeof min === 'number' && width < min) {
      width = min;
    }

    return {
      width: options.width === true ? width : undefined,
      minWidth: options.minWidth === true ? width : undefined,
      maxWidth: options.maxWidth === true ? width : undefined,
      ...sxProps,
    };
  }
}

export const sizeService = new SizeService();
