import axios from "axios";
import { useMutation, useQuery } from "react-query";

export function useGetCartBooks() {
  return useQuery(["cart-books"], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/shopping-cart`
    );
    return data;
  });
}

export function useEditCartBook() {
  const { mutate } = useMutation(
    ({
      id,
      quantity,
      totalPrice,
    }: {
      id: string;
      quantity: number;
      totalPrice: number;
    }) =>
      axios.patch(`${import.meta.env.VITE_SERVER_URL}/shopping-cart/${id}`, {
        quantity: quantity,
        totalPrice: totalPrice,
      })
  );
  return mutate;
}

export function useDeleteCartBook() {
  const { mutate } = useMutation(({ id }: { id: string }) =>
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/shopping-cart/${id}`)
  );
  return mutate;
}

export default function useAddtoCart() {
  const { mutate } = useMutation((data) =>
    axios.post(`${import.meta.env.VITE_SERVER_URL}/shopping-cart`, data)
  );

  return mutate;
}
