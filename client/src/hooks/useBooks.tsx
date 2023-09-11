import { Books } from "@/Types/Books";
import axios from "axios";
import { useMutation, useQueries, useQuery } from "react-query";

export function useSubjectBooks({
  filterByAuthors,
  filterByRating,
  filterBySubCategories,
  filterPrice,
  filterByCategories,
  page,
  limit,
  type,
}: {
  filterByAuthors: string[];
  filterByRating: number[];
  filterByCategories: string[];
  filterBySubCategories: string[];
  filterPrice: number[];
  type: string;
  limit: number;
  page: number;
}) {
  let query = `/subjective-books?_type=${type}`;

  if (filterByAuthors.length > 0) {
    query += filterByAuthors.map((author) => `&_authors[]=${author}`).join("");
  }

  if (filterByCategories.length > 0) {
    query += filterByCategories
      .map((cate) => `&_categories[]=${encodeURIComponent(cate)}`)
      .join("");
  }

  if (filterBySubCategories.length > 0) {
    query += filterBySubCategories
      .map((cate) => `&_sub_categories[]=${encodeURIComponent(cate)}`)
      .join("");
  }

  if (filterByRating.length > 0) {
    query += filterByRating.map((r) => `&_rating=${r}`).join("");
  }

  query += filterPrice.map((p) => `&_price[]=${p}`).join("");
  query += `&_page=${page}&_limit=${limit}`;

  return useQuery(
    [
      type,
      page,
      filterByCategories,
      filterBySubCategories,
      filterByAuthors,
      filterByRating,
      filterPrice,
    ],
    async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}${query}`
      );
      return data;
    }
  );
}

export function useGetCategories({
  type,
  filterByAuthors,
  filterByCategories,
  filterBySubCategories,
  filterPrice,
}: {
  type: string;
  filterByAuthors: string[];
  filterByCategories: string[];
  filterBySubCategories: string[];
  filterPrice: number[];
}) {
  let cateQuery = `/filter-by-categories?_type=${type}`;
  let subCateQuery = `/filter-by-subCategories?`;
  let authorsQuery = `/filter-by-authors?_type=${type}`;
  let priceQuery = `/filter-by-price?_type=${type}`;

  if (filterByCategories.length > 0) {
    const query = filterByCategories
      .map((cate) => `&_categories[]=${encodeURIComponent(cate)}`)
      .join("");
    subCateQuery += query;
    authorsQuery += query;
    priceQuery += query;
  }

  if (filterBySubCategories.length > 0) {
    const query = filterBySubCategories
      .map((cate) => `&_sub_categories[]=${encodeURIComponent(cate)}`)
      .join("");
    authorsQuery += query;
    priceQuery += query;
  }

  if (filterByAuthors.length > 0) {
    const query = filterByAuthors
      .map((author) => `&_authors[]=${author}`)
      .join("");
    cateQuery += query;
    priceQuery += query;
  }

  const query = filterPrice.map((p) => `&_price[]=${p}`).join("");
  priceQuery += query;

  const queries = [
    {
      queryKey: [type, filterByAuthors],
      queryFn: async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}${cateQuery}`
        );
        return data;
      },
    },
    {
      queryKey: [type, filterByCategories, filterBySubCategories],
      queryFn: async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}${authorsQuery}`
        );
        return data;
      },
    },
    {
      queryKey: [
        type,
        filterByAuthors,
        filterByCategories,
        filterBySubCategories,
      ],
      queryFn: async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}${priceQuery}`
        );
        return data;
      },
    },
  ];

  if (filterByCategories.length > 0) {
    queries.push({
      queryKey: [filterByCategories],
      queryFn: async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}${subCateQuery}`
        );
        return data;
      },
    });
  }

  const [categories, authors, minMaxPrice, subCategories] = useQueries(queries);

  return { categories, subCategories, authors, minMaxPrice };
}

export function useSearchedBooks({ search }: { search?: string }) {
  return useQuery([search], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/search?q=${search}`
    );
    return data;
  });
}

export default function useYouMayAlsoLike() {
  return useQuery("you-may-also-like", async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/books/you-may-also-like`
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
    const validCatagoriesURL = (data.book as Partial<Books>).categories
      ?.map((cata) => `&_categories[]=${cata}`)
      .join("");
    const validSubCatagoriesURL = (data.book as Partial<Books>).subCategories
      ?.map((cata) => `&_sub_categories[]=${cata}`)
      .join("");

    const { data: relatedData } = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/books/related-books?_ne=${id}${validCatagoriesURL}${validSubCatagoriesURL}&_limit=3`
    );

    return { book: data.book, relatedData, avgRating: data.avgRating };
  });
}

export function useCreateReview() {
  const { mutate, isLoading, isSuccess } = useMutation((review) =>
    axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/books/create-review`,
      review,
      {
        withCredentials: true,
      }
    )
  );
  return { mutate, isLoading, isSuccess };
}

export function useIsUsefullReview() {
  const { mutate, isLoading, isSuccess } = useMutation((isUseFull) =>
    axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/books/is-use-full`,
      isUseFull,
      {
        withCredentials: true,
      }
    )
  );
  return { mutate, isLoading, isSuccess };
}
