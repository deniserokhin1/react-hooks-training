import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const ThemeUseContext = () => {
  const theme = useContext(ThemeContext);
  if (!theme) return theme;

  return theme;
};
