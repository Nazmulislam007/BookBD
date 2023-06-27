import { Books } from "@/Types/Books";
import useAddtoCart, { useGetCartBooks } from "@/hooks/useAddtoCart";
import { Box, Button } from "@mui/material";
import { MouseEvent } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Image({
  src,
  bookId,
  author,
  title,
  price,
  ...rest
}: {
  src: string;
  bookId: string;
  author: string;
  title: string;
  price: number;
  [rest: string]: unknown;
}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutate = useAddtoCart();
  const { data } = useGetCartBooks();

  const isExitedBook = (data as Books[]).find((book) => book.id === bookId);

  const bookData: any = {
    id: bookId,
    author,
    title,
    price,
    img: src,
    quantity: 1,
    totalPrice: price,
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isExitedBook) return navigate("/shopping-cart");
    mutate(bookData, {
      onSuccess: (data) => {
        queryClient.setQueryData(["cart-books"], (prev: any) => [
          ...prev,
          data.data,
        ]);
      },
    });
  };

  return (
    <Box
      sx={{
        width: { md: "fit-content", xs: "150px" },
        height: { xs: "230px" },
        position: "relative",
        overflow: "hidden",
        border: "1px solid #dfdfdf",

        "&:hover .MuiButtonBase-root": {
          bottom: "8px",
          border: "1px solid silver",
          bgcolor: "white",
          transition: "0.3s ease-in-out",
        },

        "&:not(:hover) .MuiButtonBase-root": {
          transition: "0.3s ease-in-out",
        },
      }}
    >
      <img
        src={src}
        {...rest}
        style={{
          display: "block",
          width: "-webkit-fill-available",
          height: "-webkit-fill-available",
          padding: "10px",
        }}
      />
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          height: "34px",
          width: "calc(100% - 16px)",
          bottom: "-50px",
          left: "8px",

          color: "#444444",
          background: "white",
          border: "1px solid silver",
          borderRadius: "0",
          fontSize: "14px",
          fontWeight: "600",
          outlineStyle: "solid",
          outlineColor: "white",
          outlineWidth: "8px",
        }}
        onClick={handleClick}
      >
        {isExitedBook ? "Go to Cart" : "Add To Cart"}
      </Button>
    </Box>
  );
}
