import React from "react";
import { ThemeUseContext } from "./hooks/themeUseContext";

const Page2 = () => {
  const { theme, toggleTheme } = ThemeUseContext();
  console.log(theme.background);
  console.log(theme.color);
  return (
    <div
      style={{
        height: "100vh",
        background: theme.background,
        color: theme.color,
      }}
    >
      <button onClick={toggleTheme}>Сменить тему</button>
      Йоу камон
    </div>
  );
};

export default Page2;
