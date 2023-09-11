import axios from "axios";
import { useQuery } from "react-query";

export function useOrderedBooks({ userId }: { userId: string }) {
  return useQuery(`${userId}`, async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/get-orders?userId=${userId}`
    );
    return data;
  });
}
