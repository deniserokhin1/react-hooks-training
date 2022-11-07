import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  console.log("start useLocalStorage");
  const [value, setValue] = useState(() => {
    console.log("start useState");
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    return initialValue;
  });

  useEffect(() => {
    console.log("useEffect");
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
