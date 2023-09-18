import axios from "axios";
import { useMutation, useQuery } from "react-query";

export function useGetCartBooks() {
  return useQuery(["cart-books"], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/session-cart`,
      {
        withCredentials: true,
      }
    );
    return data;
  });
}

export function useDeleteCartBook() {
  const { mutate } = useMutation((data: { _id?: string; ordered?: string }) =>
    axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/session-cart?q=${data._id}&ordered=${
        data.ordered
      }`,
      {
        withCredentials: true,
      }
    )
  );
  return mutate;
}

export default function useAddtoCart() {
  const { mutate } = useMutation((data) =>
    axios.put(`${import.meta.env.VITE_SERVER_URL}/session-cart`, data, {
      withCredentials: true,
    })
  );

  return mutate;
}
