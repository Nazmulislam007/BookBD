import axios from "axios";
import { useQuery } from "react-query";

export function useAllBooks() {
  return useQuery("all-book", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books`
    );
    return data;
  });
}

export function useBooks() {
  return useQuery("books", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books?_start=5&_end=13`
    );
    return data;
  });
}

export function useSubjectBooks({
  type,
  page,
  limitCount,
}: {
  type: string;
  page: number;
  limitCount: number;
}) {
  let limit: number;
  switch (type) {
    case "top-10-books":
      limit = limitCount;
      break;
  }

  return useQuery([type, page], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books?_page=${page}&_limit=${limit}`
    );
    const { data: newData } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books`
    );
    return { data, total: newData.length };
  });
}

export default function useTop10Books() {
  return useQuery("top10books", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books?_limit=10`
    );
    return data;
  });
}

export function useBannarBooks() {
  return useQuery("bannarBooks", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books?_limit=4`
    );
    return data;
  });
}

export function useBookById({ id }: { id: string }) {
  return useQuery("bookById", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/${id}`
    );
    return data;
  });
}

export function useRelatedBooks({ id }: { id: string }) {
  return useQuery("relatedBooks", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books?id_ne=${id}&_limit=3`
    );
    return data;
  });
}

export function useLikedBooks({ id }: { id: string }) {
  return useQuery("likedBooks", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books?id_ne=${id}&_limit=10`
    );
    return data;
  });
}
