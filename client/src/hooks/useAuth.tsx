import { RegisterType } from "@/Types/Books";
import axios from "axios";
import { useMutation } from "react-query";

export default function useLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { mutate } = useMutation(
    "login",
    async () =>
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, {
        email,
        password,
      })
  );
  return mutate;
}

export function useRegister() {
  const data = useMutation(
    "register",
    async ({ username, email, password }: RegisterType) =>
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`, {
        username,
        email,
        password,
      })
  );
  return data;
}
