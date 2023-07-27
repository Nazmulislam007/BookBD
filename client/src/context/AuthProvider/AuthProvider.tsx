/* eslint-disable react-refresh/only-export-components */
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthProviderType = {
  children: ReactNode;
};

type ContextType = {
  setUser: Dispatch<SetStateAction<object>>;
  user: object;
};

const AuthContext = createContext<ContextType>({
  setUser: () => void {},
  user: {},
});

const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const cookie = Cookies.get(import.meta.env.VITE_COOKIE_NAME);
    if (cookie) {
      const user: object = jwt(cookie);
      setUser(user);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuth };
