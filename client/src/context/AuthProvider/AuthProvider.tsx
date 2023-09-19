/* eslint-disable react-refresh/only-export-components */
import { User } from "@/Types/UserType";
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
  setUser: Dispatch<SetStateAction<User>>;
  user: User;
};

const AuthContext = createContext<ContextType>({
  setUser: () =>
    void {
      email: String,
      exp: Number,
      iat: Number,
      role: String,
      status: Boolean,
      userId: String,
      username: String,
    },
  user: {
    email: "",
    exp: 1695103089,
    iat: 0,
    role: "user",
    status: false,
    userId: "",
    username: "",
  },
});

const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState({
    email: "",
    exp: 0,
    iat: 0,
    role: "user",
    status: false,
    userId: "",
    username: "",
  });

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
