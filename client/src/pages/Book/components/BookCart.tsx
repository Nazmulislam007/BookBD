import { Books } from "@/Types/Books";
import ActionButton from "@/components/ActionButton";
import HoverRating from "@/components/Ratting";
import useAddtoCart, { useGetCartBooks } from "@/hooks/useAddtoCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Stack, Typography } from "@mui/material";
import { MouseEvent } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function BookCart({
  authors,
  title,
  _id,
  imageLinks,
  description,
  saleInfo,
}: Partial<Books>) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutate = useAddtoCart();
  const { data } = useGetCartBooks();
  const { price, discountPrice } = saleInfo || {};

  // Percentage saved
  const validPrice = price || 0;
  const save = +(validPrice - (discountPrice || 0)).toFixed(2);
  const percentage = +(save / validPrice).toFixed(2) * 100;

  const isExitedBook = (data as Books[])?.find((book) => book._id === _id);

  const bookData: any = {
    _id,
    author: authors && authors[0],
    title,
    price,
    img: imageLinks?.thumbnail,
    quantity: 1,
    totalPrice: price,
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isExitedBook) return navigate("/shopping-cart");
    mutate(bookData, {
      onSuccess: () => {
        queryClient.setQueryData(["cart-books"], (prev: any) => [
          ...prev,
          bookData,
        ]);
      },
    });
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        flex: "1 1 70%",
      }}
    >
      <Box component="div" sx={{ width: { md: "auto", xs: "100%" } }}>
        <Box
          sx={{
            border: "1px solid #dfdfdf",
            p: 2,
            width: "fit-content",
            margin: "auto",
          }}
        >
          <img src={imageLinks?.thumbnail} style={{ display: "block" }} />
        </Box>
      </Box>

      <Stack component="header" flex="1 1 60%" pb={2}>
        <Typography component="h4" fontSize="1.8rem">
          {title}
        </Typography>
        <Typography component="p" fontSize=".8rem">
          by{" "}
          {authors?.map((author, i) => (
            <Typography
              component="a"
              fontSize=".8rem"
              mr="5px"
              sx={{ textDecoration: "underline" }}
              key={i}
            >
              {author}
            </Typography>
          ))}
        </Typography>
        <HoverRating />
        <Typography component="p" fontSize="14px" mt={1}>
          {description}
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="baseline"
          gap={2}
          mt={1}
        >
          <Typography
            component="p"
            sx={{ textDecoration: "line-through" }}
            color="GrayText"
            fontSize="1.7rem"
          >
            ${saleInfo?.price}
          </Typography>
          <Typography
            component="p"
            color="#63422d"
            fontWeight="600"
            fontSize="1.7rem"
          >
            ${saleInfo?.discountPrice}
          </Typography>
          <Typography component="p" color="gray" fontSize="1rem">
            You Save ${save} ({percentage}%)
          </Typography>
        </Stack>
        <Box
          component="div"
          sx={{ display: "flex", gap: "7px", alignItems: "center", mt: 1 }}
        >
          <CheckCircleIcon sx={{ color: "green" }} />
          <Typography sx={{ color: "gray", fontSize: "1rem" }}>
            In Stock ({saleInfo?.availableCopy} copies available)
          </Typography>
        </Box>
        <Box component="div" mt={3}>
          <ActionButton
            title={isExitedBook ? "Go To Cart" : "Add To Cart"}
            onClick={handleClick}
          />
        </Box>
      </Stack>
    </Box>
  );
}
