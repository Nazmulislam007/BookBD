import { Prettify } from "./Books";

type U = {
  email: string;
  exp: number;
  iat: number;
  role: string;
  status: boolean;
  userId: string;
  username: string;
};

export type User = Prettify<U>;
