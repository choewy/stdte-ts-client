import { useEffect, useState } from 'react';

export class ButtonHook {
  private checkSameObject(origin: object, value: object) {
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

  useDisabledByObject(origin: object, value: object) {
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
      const keys = Object.keys(value) as Array<keyof object>;

      let disabled = true;

      for (const key of keys) {
        if (
          origin[key] &&
          value[key] &&
          typeof origin[key] === 'object' &&
          typeof value[key] === 'object' &&
          typeof origin[key] === typeof value[key]
        ) {
          disabled = this.checkSameObject(origin[key], value[key]);

          if (disabled === false) {
            break;
          }
        } else {
          disabled = value[key] === origin[key];

          if (disabled === false) {
            break;
          }
        }
      }

      setDisabled(disabled);
    }, [origin, value, setDisabled]);

    return disabled;
  }

  useDisabledByArray<T>(origins: T[], values: T[]) {
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
      if (origins.length !== values.length) {
        return setDisabled(false);
      }

      let disabled = true;

      for (const origin of origins) {
        if (values.includes(origin) === false) {
          disabled = false;
          break;
        }
      }

      setDisabled(disabled);
    }, [origins, values, setDisabled]);

    return disabled;
  }
}

export const buttonHook = new ButtonHook();
