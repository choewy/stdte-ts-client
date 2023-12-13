import { useEffect, useState } from 'react';

export class ButtonHook {
  useDisabled(origin: object, data: object) {
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
      const keys = Object.keys(data) as Array<keyof object>;

      let disabled = true;

      for (const key of keys) {
        if (data[key] !== origin[key]) {
          disabled = false;
          break;
        }
      }

      setDisabled(disabled);
    }, [origin, data, setDisabled]);

    return disabled;
  }
}

export const buttonHook = new ButtonHook();
