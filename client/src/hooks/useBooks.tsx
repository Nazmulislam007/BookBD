import { Books } from "@/Types/Books";
import axios from "axios";
import { useQuery } from "react-query";

export function useAllBooks() {
  return useQuery("all-book", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books`,
      {
        withCredentials: true,
      }
    );
    return data;
  });
}

export function useBooksWeLove() {
  return useQuery("books-we-love", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/books-we-love`
    );
    return data;
  });
}

export function useSubjectBooks({
  type,
  page,
  limitCount,
  search,
}: {
  type: string;
  page: number;
  limitCount: number;
  search?: string;
}) {
  let query: string;

  if (search !== "") {
    query = `/books/search?q=${search}&_page=${page}&_limit=${limitCount}`;
  } else {
    query = `/books/subjective-books?_page=${page}&_limit=${limitCount}`;
  }

  return useQuery([type, page, search], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}${query}`
    );
    return data;
  });
}

export default function useTop50Books() {
  return useQuery("subjective-books", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/subjective-books`
    );
    return data;
  });
}

export function useBannarBooks() {
  const encodedUrl = encodeURIComponent("upto-75%-off");

  return useQuery(encodedUrl, async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/${encodedUrl}`
    );
    return data;
  });
}

export function useBookById({ id }: { id: string }) {
  return useQuery([id], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/${id}`
    );

    // making valid URL...
    const validCatagoriesURL = (data as Partial<Books>).catagories
      ?.map((cata) => `&catagories[]=${cata}`)
      .join("");
    const validSubCatagoriesURL = (data as Partial<Books>).subCatagory
      ?.map((cata) => `&sub_catagories[]=${cata}`)
      .join("");

    const { data: relatedData } = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/books/related-books?_ne=${id}${validCatagoriesURL}${validSubCatagoriesURL}&_limit=3`
    );

    return { data, relatedData };
  });
}
