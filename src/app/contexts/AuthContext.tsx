import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

export interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storageAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return !!storageAccessToken;
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin }}>
      { children }
    </AuthContext.Provider>
  );
}
