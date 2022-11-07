import React from "react";

interface IColor {
  color: string;
  background: string;
}

interface IContext {
    theme: IColor;
    toggleTheme: () => void;
  }

interface IThemes {
  light: IColor;
  dark: IColor;
}

export const themes: IThemes = {
  dark: {
    background: "#282c34",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#282c34",
  },
};

export const ThemeContext = React.createContext({} as IContext);
