/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
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
  setUser: Dispatch<
    SetStateAction<{
      user: object;
      status: boolean;
    }>
  >;
  user: {
    user: object;
    status: boolean;
  };
};

const AuthContext = createContext<ContextType>({
  setUser: () =>
    void {
      user: Object,
      status: Boolean,
    },
  user: {
    user: {},
    status: false,
  },
});

const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState({ user: {}, status: false });

  useEffect(() => {
    async function isLoggedIn() {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/auth`,
          { withCredentials: true }
        );
        setUser(data);
      } catch (error: any) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.statusText);
        }
      }
    }
    isLoggedIn();
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
