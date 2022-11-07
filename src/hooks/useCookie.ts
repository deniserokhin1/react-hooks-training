import Cookies from "js-cookie";
import { useCallback, useState } from "react";

export const useCookie = (name: any, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;

    Cookies.set(name, initialValue);
    return initialValue;
  });

  const updateCookie = useCallback(
    (newValue: any, options: any) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
};