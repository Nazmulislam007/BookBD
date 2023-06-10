import { Books } from "@/Types/Books";
import { useRelatedBooks } from "@/hooks/useBooks";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function RelatedBooks({ id }: { id: string }) {
  const { data, isLoading, isError } = useRelatedBooks({ id });

  const books: Partial<Books>[] = data;

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: </span>;

  return (
    <Box flex="1 1 300px">
      <Typography component="p" fontWeight="600">
        Related Products
      </Typography>
      {books?.map((book) => (
        <Stack direction="row" gap="10px" py={2} key={book.id}>
          <Box component="div" sx={{ width: "60px" }}>
            <img
              src={book.imageLinks?.thumbnail}
              style={{ display: "block", width: "100%" }}
            />
          </Box>
          <Box component="div">
            <Typography
              component="p"
              sx={{
                fontWeight: "600",
                fontSize: ".9rem",
                textOverflow: "ellipsis",
                width: "150px",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {book.title}
            </Typography>
            <Typography component="p" fontSize=".9rem">
              {book.authors?.slice(0, 1)}
            </Typography>
            <Stack direction="row" gap={2} mt={0.5}>
              <Typography
                component="p"
                sx={{ textDecoration: "line-through" }}
                color="GrayText"
              >
                ${book.saleInfo?.price}
              </Typography>
              <Typography component="p" color="#63422d" fontWeight="600">
                ${book.saleInfo?.discountPrice}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      ))}

      <Divider />
    </Box>
  );
}
