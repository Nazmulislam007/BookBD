import axios from "axios";
import { useQuery } from "react-query";

export default function useBooks() {
  return useQuery("books", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books`
    );
    return data;
  });
}

export function useBannarBooks() {
  return useQuery("books", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books?_limit=4`
    );
    return data;
  });
}
