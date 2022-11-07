import React, { FC } from "react";
import { useCookie } from "./hooks/useCookie";

const UseCookie: FC = () => {
  const [value, updateCookie, deleteCookie] = useCookie("token", "");
  return (
    <>
      <button onClick={() => updateCookie(String(new Date()))}>
        Изменить токен
      </button>
      <button onClick={() => deleteCookie(String())}>Удалить токен</button>
      <div>Token: {value}</div>
    </>
  );
};

export default UseCookie;
