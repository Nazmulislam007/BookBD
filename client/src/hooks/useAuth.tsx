import { RegisterType } from "@/Types/Books";
import axios from "axios";
import { useMutation } from "react-query";

export default function useLogin() {
  const data = useMutation(
    "login",
    async ({ email, password }: { email: string; password: string }) =>
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, {
        email,
        password,
      }, {
        withCredentials: true
      })
  );
  return data;
}

export function useRegister() {
  const data = useMutation(
    "register",
    async ({ username, email, password }: RegisterType) =>
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`, {
        username,
        email,
        password,
      }, {
        withCredentials: true
      })
  );
  return data;
}
