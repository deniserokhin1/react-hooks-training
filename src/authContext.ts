import React, { Dispatch, SetStateAction } from "react";

interface IContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = React.createContext({} as IContext);
