import { Books } from "@/Types/Books";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function RelatedBooks({
  relatedBooks,
}: {
  relatedBooks: Partial<Books>[];
}) {
  return (
    <Box flex="1 1 300px">
      <Typography component="p" fontWeight="600">
        Related Products
      </Typography>
      {relatedBooks?.map((book) => (
        <Link to={`/b/${book._id}`} key={book._id}>
          <Stack direction="row" gap="10px" py={2}>
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
              <Typography component="p" fontSize=".8rem">
                {book.authors?.slice(0, 1)}
              </Typography>
              <Stack direction="row" gap={2} mt={0.2}>
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
        </Link>
      ))}

      <Divider />
    </Box>
  );
}
