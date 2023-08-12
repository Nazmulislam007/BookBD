import { Books } from "@/Types/Books";
import axios from "axios";
import { useQuery } from "react-query";

export function useSubjectBooks({
  query,
  changeCache,
}: {
  query: string;
  changeCache: string;
}) {
  return useQuery([changeCache], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}${query}`
    );
    return data;
  });
}

export function useSearchedBooks({ search }: { search?: string }) {
  return useQuery([search], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/search?q=${search}`
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

export function useHomeBooks() {
  return useQuery("books", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/b`
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
