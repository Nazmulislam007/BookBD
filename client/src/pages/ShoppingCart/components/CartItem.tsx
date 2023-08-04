import { CartBookType } from "@/Types/Books";
import useAddtoCart, { useDeleteCartBook } from "@/hooks/useAddtoCart";
import { debounce, fixed } from "@/lib";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useQueryClient } from "react-query";

export default function CartItem({ book }: { book: CartBookType }) {
  const queryClient = useQueryClient();
  const mutate = useAddtoCart();
  const deleteCart = useDeleteCartBook();

  const handleIncreQty = debounce(() => {
    mutate(
      {
        ...book,
        type: "incre",
      } as any,
      {
        onSuccess: (_data, variables: any) => {
          queryClient.setQueryData(["cart-books"], (prev: any) =>
            prev.map((elem: any) => {
              if (elem._id === variables._id) {
                return {
                  ...elem,
                  quantity: elem.quantity + 1,
                  totalPrice: fixed(elem.price * (elem.quantity + 1)),
                };
              }
              return elem;
            })
          );
        },
      }
    );
  }, 300);

  const handleDecreQty = debounce(() => {
    mutate(
      {
        ...book,
        type: "decre",
      } as any,
      {
        onSuccess: (data, variables: any) => {
          // if the quantity is zero than it will be deleted
          if (data.data.quantity <= 1) {
            deleteCart({ _id: data.data._id } as any);
          }

          queryClient.setQueryData(["cart-books"], (prev: any) =>
            prev
              .map((elem: any) => {
                if (elem._id === variables._id) {
                  return {
                    ...elem,
                    quantity: elem.quantity - 1,
                    totalPrice: fixed(elem.price * (elem.quantity - 1)),
                  };
                }
                return elem;
              })
              .filter((elem: any) => elem.quantity > 0)
          );
        },
      }
    );
  }, 300);

  const handleDel = () => {
    deleteCart({ _id: book._id } as any, {
      onSuccess: (_data, variables) => {
        queryClient.setQueryData(["cart-books"], (prev: any) =>
          prev.filter((elem: any) => elem._id !== variables._id)
        );
      },
    });
  };

  return (
    <Stack
      direction="row"
      gap="15px"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
    >
      <Stack direction="row" gap="15px">
        <Box component="div" sx={{ minWidth: "80px", width: "80px" }}>
          <img src={book.img} style={{ display: "block", width: "100%" }} />
        </Box>
        <Box component="div">
          <Typography
            component="p"
            fontWeight="600"
            fontSize="18px"
            lineHeight="1.4"
          >
            {book.title}
          </Typography>
          <Typography component="p" fontSize="13px" mt="5px">
            {book.author}
          </Typography>
          <Typography
            component="p"
            mt={1}
            fontSize="20px"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            ${book.totalPrice}
          </Typography>
          <Typography
            component="button"
            fontSize="13px"
            my="10px"
            color="red"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={handleDel}
          >
            Remove
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #63422d",
                height: "36px",
                minWidth: "36px",
                borderRadius: "0",
                color: "black",

                "&:hover": {
                  background: "#63422d15",
                  border: "1px solid #000000",
                  color: "black",
                },
              }}
              onClick={handleDecreQty}
            >
              -
            </Button>
            <Box
              sx={{
                width: "55px",
                height: "36px",
                textAlign: "center",
                lineHeight: "36px",
                border: "1px solid",
              }}
            >
              {book.quantity}
            </Box>

            <Button
              variant="outlined"
              sx={{
                border: "1px solid #63422d",
                height: "36px",
                minWidth: "36px",
                borderRadius: "0",
                color: "black",

                "&:hover": {
                  background: "#63422d15",
                  border: "1px solid #000000",
                  color: "black",
                },
              }}
              onClick={handleIncreQty}
            >
              +
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Stack direction="row" gap="15px" alignItems="center">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button
            variant="outlined"
            sx={{
              border: "1px solid #63422d",
              height: "36px",
              minWidth: "36px",
              borderRadius: "0",
              color: "black",
              "&:hover": {
                background: "#63422d15",
                border: "1px solid #000000",
                color: "black",
              },
            }}
            onClick={handleDecreQty}
          >
            -
          </Button>
          <Box
            sx={{
              width: "55px",
              height: "36px",
              textAlign: "center",
              lineHeight: "36px",
              border: "1px solid",
            }}
          >
            {book.quantity}
          </Box>

          <Button
            variant="outlined"
            sx={{
              border: "1px solid #63422d",
              height: "36px",
              minWidth: "36px",
              borderRadius: "0",
              color: "black",

              "&:hover": {
                background: "#63422d15",
                border: "1px solid #000000",
                color: "black",
              },
            }}
            onClick={handleIncreQty}
          >
            +
          </Button>
        </Stack>
        <Typography
          component="p"
          fontSize="20px"
          textAlign="end"
          sx={{ display: { xs: "none", md: "block" }, minWidth: "100px" }}
        >
          ${book.totalPrice}
        </Typography>
      </Stack>
    </Stack>
  );
}
