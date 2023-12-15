import { useEffect, useState } from 'react';

export class ButtonHook {
  private checkSame(origin: object, value: object) {
    let disabled = true;

    const keys = Object.keys(value) as Array<keyof object>;

    for (const key of keys) {
      if (origin[key] !== value[key]) {
        disabled = false;
        break;
      }
    }

    return disabled;
  }

  useDisabled(origin: object, data: object) {
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
      const keys = Object.keys(data) as Array<keyof object>;

      let disabled = true;

      for (const key of keys) {
        if (
          typeof origin[key] === 'object' &&
          typeof data[key] === 'object' &&
          typeof origin[key] === typeof data[key]
        ) {
          disabled = this.checkSame(origin[key], data[key]);

          if (disabled === false) {
            break;
          }
        } else {
          disabled = data[key] === origin[key];

          if (disabled === false) {
            break;
          }
        }
      }

      setDisabled(disabled);
    }, [origin, data, setDisabled]);

    return disabled;
  }
}

export const buttonHook = new ButtonHook();
