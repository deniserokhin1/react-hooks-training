import { useContext } from "react";
import { AuthContext } from "../authContext";

export const AuthUseContext = () => {
  const auth = useContext(AuthContext);
  if (!auth) return auth;

  return auth;
};
