import axios from "axios";
import { useMutation, useQuery } from "react-query";

export function useGetCartBooks() {
  return useQuery(["cart-books"], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/shopping-cart`, {
        withCredentials: true
      }
    );
    return data;
  });
}

export function useEditCartBook() {
  const { mutate } = useMutation(
    ({ _id, type, price }: { _id: string; type: string; price: number }) =>
      axios.patch(`${import.meta.env.VITE_SERVER_URL}/shopping-cart`, {
        _id,
        type,
        price,
      })
  );
  return mutate;
}

export function useDeleteCartBook() {
  const { mutate } = useMutation(({ _id }: { _id: string }) =>
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/shopping-cart?q=${_id}`)
  );
  return mutate;
}

export default function useAddtoCart() {
  const { mutate } = useMutation((data) =>
    axios.post(`${import.meta.env.VITE_SERVER_URL}/shopping-cart`, data, {
      withCredentials: true
    })
  );

  return mutate;
}
