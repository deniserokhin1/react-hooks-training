import React from "react";
import { AuthUseContext } from "./hooks/authUseContext";

const Page = () => {
  const { isAuth, setIsAuth } = AuthUseContext();

  return (
    <div>
      {isAuth && <div style={{ background: "blue" }}>Работает</div>}
      <button onClick={() => setIsAuth(isAuth)}>Click</button>
    </div>
  );
};

export default Page;
